import _ from 'lodash';
import isEqual from 'lodash/isEqual';
import fs from 'node:fs/promises';
import path from 'node:path';
import type PkgT from '../package.json';
import { parseSelector } from './selector';
import type {
  RawApp,
  RawAppGroup,
  IArray,
  RawSubscription,
  RawGlobalGroup,
} from './types';
import JSON5 from 'json5';
import { pinyin } from 'pinyin-pro';

const iArrayToArray = <T>(array: IArray<T> = []): T[] => {
  return Array<T>().concat(array);
};

// 定义一个指定 RawSubscription 属性顺序的数组
const sortKeys: (keyof RawSubscription)[] = [
  'id',
  'name',
  'version',
  'author',
  'supportUri',
  'updateUrl',
  'checkUpdateUrl',
  'globalGroups',
  'categories',
  'apps',
];

const orderdStringify = (
  obj: any,
  keys: string[],
  replacer?: (this: any, key: string, value: any) => any,
  space?: string | number,
) => {
  const map = new Map<string, unknown>();
  keys.forEach((k) => {
    if (obj[k] === undefined) return;
    map.set(k, obj[k]);
  });
  return (
    JSON.stringify(Object.fromEntries(map.entries()), replacer, space) + '\n'
  );
};
const orderdStringify5 = (
  obj: any,
  keys: string[],
  replacer?: (this: any, key: string, value: any) => any,
  space?: string | number,
) => {
  const map = new Map<string, unknown>();
  keys.forEach((k) => {
    if (obj[k] === undefined) return;
    map.set(k, obj[k]);
  });
  return (
    JSON5.stringify(Object.fromEntries(map.entries()), replacer, space) + '\n'
  );
};

// 解析 package.json 文件，并将结果赋值给 pkg 变量
const pkg: typeof PkgT = JSON.parse(
  await fs.readFile(process.cwd() + '/package.json', 'utf-8'),
);
const pkgKeys = Object.keys(pkg);

const gkdFp = process.cwd() + '/dist/gkd.json5';
const versionFp = process.cwd() + '/dist/gkd.version.json';
const oldConfig: RawSubscription = JSON5.parse(
  await fs.readFile(gkdFp, 'utf-8').catch(() => '{}'),
);

// 导出一个异步函数，用于写入新的规则配置
export const writeConfig = async (config: RawSubscription) => {
  // 创建新的配置对象，其中的版本号从旧的配置中获取，或者默认为 0
  const newConfig: RawSubscription = {
    ...config,
    version: oldConfig.version || 0,
  };
  newConfig.version = oldConfig.version || 0;
  checkConfig(newConfig); // 检查配置的有效性

  const hasUpdate = !_.isEqual(newConfig, oldConfig);
  if (!hasUpdate) {
    console.log('暂无规则变化');
    return;
  }
  // newConfig.version = 0;  //版本回退为0，npm run build 后为1
  newConfig.version++;

  // update md
  await updateReadMeMd(newConfig, oldConfig);

  // update package.json
  pkg.version = `1.${newConfig.version}.0`;
  await fs.writeFile(
    process.cwd() + '/package.json',
    orderdStringify(pkg, pkgKeys, undefined, 2),
    'utf-8',
  );

  // update gkd.json
  const buffer = Buffer.from(orderdStringify5(newConfig, sortKeys), 'utf-8');
  await fs.writeFile(gkdFp, buffer);

  // update gkd.version.json
  await fs.writeFile(
    versionFp,
    JSON.stringify(
      { id: newConfig.id, version: newConfig.version },
      undefined,
      2,
    ),
  );

  console.log(
    `更新订阅: v${newConfig.version}, 文件大小: ${
      (buffer.length / 1024).toFixed(3) + 'KB'
    }`,
  );
};

// 导出一个异步生成器函数，用于遍历指定目录下的文件
export async function* walk(dirPath: string) {
  const pathnames = (await fs.readdir(dirPath)).map((s) =>
    path.join(dirPath, s),
  );
  while (pathnames.length > 0) {
    const pathname = pathnames.pop()!;
    const state = await fs.lstat(pathname);
    if (state.isFile()) {
      yield pathname;
    } else if (state.isDirectory()) {
      pathnames.push(
        ...(await fs.readdir(pathname)).map((s) => path.join(pathname, s)),
      );
    }
  }
}

// 导出一个函数，用于验证快照 URL 的有效性
export const validSnapshotUrl = (s: string) => {
  const u = new URL(s);
  // return u.pathname.startsWith('/import/');
  return u.pathname.startsWith('/i/');
};

// 导出一个函数，用于检查配置的有效性
export const checkConfig = (newConfig: RawSubscription) => {
  // 检查分类是否重复
  const categories = newConfig.categories || [];
  categories.forEach((c) => {
    if (
      categories.some(
        (c2) => (c2.key == c.key || c2.name == c.name) && c2 !== c,
      )
    ) {
      console.error({
        configName: newConfig.name,
        categoryName: c.name,
        categoryKey: c.key,
      });
      throw new Error('invalid duplicated category');
    }
  });

  // 检查全局组是否存在重复
  const globalGroups = newConfig.globalGroups || [];
  globalGroups.forEach((g) => {
    if (globalGroups.some((g2) => g2.key == g.key && g2 !== g)) {
      console.error({
        configName: newConfig.name,
        groupName: g.name,
        groupKey: g.key,
      });
      throw new Error('invalid deprecated global group key');
    }
    // check rules selector syntax
    g.rules.forEach((r) => {
      [r.matches, r.excludeMatches]
        .map((m) => iArrayToArray(m))
        .flat()
        .forEach((selector) => {
          try {
            parseSelector(selector);
          } catch (e) {
            console.error({
              message: 'invalid selector syntax',
              groupKey: g.key,
              selector,
            });
            throw e;
          }
        });
    });
  });

  // check duplicated group key
  const apps = newConfig.apps || [];
  apps.forEach((app) => {
    const deprecatedKeys = app.deprecatedKeys || [];
    const keys = new Set<number>();
    const oldGroups = oldConfig.apps?.find((a) => a.id == app.id)?.groups || [];

    //对规则组里的规则按拼音进行排序
    app.groups.sort((a, b) => {
      // 将中文名字转换为拼音
      const aPinyin = pinyin(a.name, {
        separator: '',
        toneType: 'none',
      });
      const bPinyin = pinyin(b.name, {
        separator: '',
        toneType: 'none',
      });
      // 根据拼音顺序进行排序
      return aPinyin.localeCompare(bPinyin, 'zh-Hans-CN');
    });

    app.groups?.forEach((g) => {
      const oldGroup = oldGroups.find((og) => og.key == g.key);
      if (!oldGroup || !_.isEqual(oldGroup, g)) {
        // 检查新增/变动的规则组是否能被分类
        if (
          !categories.some(
            (c) => g.name == c.name || g.name.startsWith(c.name + '-'),
          )
        ) {
          console.error({
            configName: newConfig.name,
            appId: app.id,
            appName: app.name,
            groupName: g.name,
            groupKey: g.key,
            categories: categories.map((c) => c.name),
          });
          throw new Error(
            [
              'invalid group name, it must equal any category name or startWith categoryName + "-".',
              'example: "开屏广告" or "分段广告-朋友圈"',
            ].join('\n'),
          );
        }
      }

      if (deprecatedKeys.includes(g.key)) {
        console.error({
          configName: newConfig.name,
          appId: app.id,
          groupName: g.name,
          groupKey: g.key,
        });
        throw new Error('invalid deprecated group key');
      }
      if (keys.has(g.key)) {
        console.error({
          configName: newConfig.name,
          appId: app.id,
          groupName: g.name,
          groupKey: g.key,
        });
        throw new Error('invalid duplicated group key');
      }
      keys.add(g.key);

      // check duplicated rule key
      const ruleKeys = new Set<number>();
      iArrayToArray(g.rules).forEach((r) => {
        if (typeof r == 'object' && r.key !== undefined) {
          if (ruleKeys.has(r.key)) {
            console.error({
              configName: newConfig.name,
              appId: app.id,
              groupName: g.name,
              groupKey: g.key,
              ruleKey: r.key,
            });
            throw new Error('invalid duplicated rule key');
          }
          ruleKeys.add(r.key);
        }
      });

      // check rules selector syntax
      const rules = iArrayToArray(g.rules).map((r) => {
        if (typeof r == 'string') {
          return { matches: r };
        }
        return r;
      });
      rules.forEach((r) => {
        [r.matches, r.excludeMatches]
          .map((m) => iArrayToArray(m))
          .flat()
          .forEach((selector) => {
            try {
              parseSelector(selector);
            } catch (e) {
              console.error({
                message: 'invalid selector syntax',
                appId: app.id,
                groupKey: g.key,
                selector,
              });
              throw e;
            }
          });
      });

      // check snapshotUrls
      iArrayToArray(g.snapshotUrls).forEach((u) => {
        if (!validSnapshotUrl(u)) {
          console.error({
            appId: app.id,
            groupKey: g.key,
          });
          throw new Error(
            // `invalid snapshotUrls: ${u}\nit should like https://i.gkd.li/import/12506571`,
            `invalid snapshotUrls: ${u}\nit should like https://i.gkd.li/i/12506571`,
          );
        }
      });
      iArrayToArray(g.rules).forEach((r, ruleIndex) => {
        if (typeof r == 'string') return;
        iArrayToArray(r.snapshotUrls).forEach((u) => {
          if (!validSnapshotUrl(u)) {
            console.error({
              appId: app.id,
              groupKey: g.key,
              ruleIndex: ruleIndex,
              ruleKey: r.key,
            });
            throw new Error(
              // `invalid snapshotUrls: ${u}\nit should like https://i.gkd.li/import/12506571`,
              `invalid snapshotUrls: ${u}\nit should like https://i.gkd.li/i/12506571`,
            );
          }
        });
      });
    });
  });

  const newKeys = Object.keys(newConfig) as (keyof RawSubscription)[];
  if (newKeys.some((s) => !sortKeys.includes(s))) {
    console.log({
      sortKeys,
      newKeys,
    });
    throw new Error('sortKeys miss some new key');
  }
};

// 导出一个异步函数，用于更新应用的 Markdown 文件
export const updateAppMd = async (app: RawApp) => {
  // 生成应用的 Markdown 文本内容
  const appHeadMdText = [
    `# ${app.name}`,
    `存在 ${app.groups?.length || 0} 规则组 - [${app.id}](/src/apps/${
      app.id
    }.ts)`,
  ].join('\n\n');
  const groupMdText = (app.groups || [])
    .map((group) => {
      const groupNameMdText = [
        `## ${group.name}`,
        [group.enable === false ? '默认禁用' : '', group.desc]
          .filter((s) => s)
          .join(' - '),
      ]
        .join('\n\n')
        .trim();

      const exampleUrls: string[] = [];
      exampleUrls.push(...iArrayToArray(group.exampleUrls));
      iArrayToArray(group.rules)
        .map((r) => (typeof r == 'string' ? [] : iArrayToArray(r.exampleUrls)))
        .flat()
        .forEach((u) => {
          if (u) {
            exampleUrls.push(u);
          }
        });
      const exampleMdText = exampleUrls
        .map((u, i) => {
          if (u) {
            return `- [示例-${i}](${u})`;
          }
        })
        .join('\n');

      const snapshotUrls: string[] = [];
      snapshotUrls.push(...iArrayToArray(group.snapshotUrls));
      iArrayToArray(group.rules)
        .map((r) => (typeof r == 'string' ? [] : iArrayToArray(r.snapshotUrls)))
        .flat()
        .forEach((u) => {
          if (u) {
            snapshotUrls.push(u);
          }
        });
      const snapshotMdText = snapshotUrls
        .map((u, i) => {
          if (u) {
            return `- [快照-${i}](${u})`;
          }
        })
        .join('\n');
      return [groupNameMdText, exampleMdText, snapshotMdText]
        .filter((s) => s)
        .join('\n\n')
        .trim();
    })
    .join('\n\n')
    .trim();

  const appMdText = [appHeadMdText, groupMdText].join('\n\n').trim() + '\n';
  await fs.writeFile(process.cwd() + `/docs/${app.id}.md`, appMdText, 'utf-8');
};

const getAppDiffLog = (
  oldGroups: RawAppGroup[] = [],
  newGroups: RawAppGroup[] = [],
) => {
  // 根据旧应用组列表和新应用组列表，计算出被移除的应用组列表
  const removeGroups = oldGroups.filter(
    (og) => !newGroups.find((ng) => ng.key == og.key),
  );
  const addGroups: RawAppGroup[] = [];
  const changeGroups: RawAppGroup[] = [];
  newGroups.forEach((ng) => {
    const oldGroup = oldGroups.find((og) => og.key == ng.key);
    if (oldGroup) {
      if (!_.isEqual(oldGroup, ng)) {
        changeGroups.push(ng);
      }
    } else {
      addGroups.push(ng);
    }
  });
  return {
    addGroups,
    changeGroups,
    removeGroups,
  };
};

// 定义一个函数，用于获取全局规则的变更日志
const getGlobalDiffLog = (
  oldGlobalGroups: RawGlobalGroup[] = [], // 旧全局应用组列表，默认为空数组
  newGlobalGroups: RawGlobalGroup[] = [], // 新全局应用组列表，默认为空数组
) => {
  // 根据旧全局应用组列表和新全局应用组列表，计算出被移除的全局应用组列表
  const removeGlobalGroups = oldGlobalGroups.filter(
    (og) => !newGlobalGroups.find((ng) => ng.key == og.key),
  );
  const addGlobalGroups: RawGlobalGroup[] = []; // 存储新增的全局应用组列表
  const changeGlobalGroups: RawGlobalGroup[] = []; // 存储变更的全局应用组列表
  // 遍历新全局应用组列表
  newGlobalGroups.forEach((ng) => {
    const oldGroup = oldGlobalGroups.find((og) => og.key == ng.key); // 查找对应的旧全局应用组
    if (oldGroup) {
      // 如果找到了对应的旧全局应用组
      if (!isEqual(oldGroup, ng)) {
        // 检查新旧全局应用组对象是否相等
        changeGlobalGroups.push(ng); // 如果不相等，则将新全局应用组添加到变更列表中
      }
    } else {
      // 如果未找到对应的旧全局应用组
      addGlobalGroups.push(ng); // 将新全局应用组添加到新增列表中
    }
  });
  return {
    addGlobalGroups, // 返回新增的全局应用组列表
    changeGlobalGroups, // 返回变更的全局应用组列表
    removeGlobalGroups, // 返回被移除的全局应用组列表
  };
};

// 定义一个类型，表示应用的变更日志
type AppDiff = {
  app: RawApp;
  addGroups: RawAppGroup[];
  changeGroups: RawAppGroup[];
  removeGroups: RawAppGroup[];
};

// 定义一个类型，表示全局规则的变更日志
type GlobalDiff = {
  addGlobalGroups: RawGlobalGroup[];
  changeGlobalGroups: RawGlobalGroup[];
  removeGlobalGroups: RawGlobalGroup[];
};

export const updateReadMeMd = async (
  newConfig: RawSubscription,
  oldConfig: RawSubscription,
) => {
  let changeCount = 0;
  const appDiffs: AppDiff[] = [];
  await Promise.all(
    newConfig.apps!.map(async (app) => {
      const oldApp = oldConfig.apps!.find((a) => a.id == app.id);
      if (!_.isEqual(oldApp, app)) {
        changeCount++;
        await updateAppMd(app);
        const diffLog = getAppDiffLog(oldApp?.groups, app.groups);
        if (
          diffLog.addGroups.length +
            diffLog.changeGroups.length +
            diffLog.removeGroups.length >
          0
        ) {
          appDiffs.push({ app, ...diffLog });
        }
      }
    }),
  );
  if (appDiffs.length > 0) {
    const addGroupsCount = appDiffs.reduce((p, c) => p + c.addGroups.length, 0);
    const changeGroupsCount = appDiffs.reduce(
      (p, c) => p + c.changeGroups.length,
      0,
    );
    const removeGroupsCount = appDiffs.reduce(
      (p, c) => p + c.removeGroups.length,
      0,
    );
    const changeLogText =
      [
        '# v' + newConfig.version,
        [
          `更新 ${appDiffs.length} 应用`,
          addGroupsCount ? `新增 ${addGroupsCount} 规则` : '',
          changeGroupsCount ? `变动 ${changeGroupsCount} 规则` : '',
          removeGroupsCount ? `移除 ${removeGroupsCount} 规则` : '',
        ]
          .filter((s) => s)
          .join(',\x20'),
        '## 更新详情',
        '|APP|新增|变动|移除|\n|-|-|-|-|\n' +
          appDiffs
            .map((a) =>
              [
                '',
                a.app.name,
                a.addGroups.map((g) => '<li>' + g.name).join(''),
                a.changeGroups.map((g) => '<li>' + g.name).join(''),
                a.removeGroups.map((g) => '<li>' + g.name).join(''),
                '',
              ].join('|'),
            )
            .join('\n'),
      ].join('\n\n') + '\n';

    await fs.writeFile(process.cwd() + '/CHANGELOG.md', changeLogText);
  }

  if (changeCount > 0) {
    const appListText =
      '| 名称 | ID | 规则组 |\n| - | - | - |\n' +
      newConfig
        .apps!.map((app) => {
          const groups = app.groups || [];
          return `| ${app.name} | [${app.id}](/docs/${app.id}.md) | ${groups.length} |`;
        })
        .join('\n');
    const appListTemplateMd = await fs.readFile(
      process.cwd() + '/AppListTemplate.md',
      'utf-8',
    );
    await fs.writeFile(
      process.cwd() + '/AppList.md',
      appListTemplateMd.replaceAll('--APP_LIST--', appListText),
    );
  }

  const mdTemplate = await fs.readFile(process.cwd() + '/Template.md', 'utf-8');
  const readMeMdText = mdTemplate
    .replaceAll('--APP_SIZE--', newConfig.apps!.length.toString())
    .replaceAll(
      '--GROUP_SIZE--',
      newConfig
        .apps!.reduce((p, c) => p + (c.groups?.length || 0), 0)
        .toString(),
    )
    .replaceAll('--VERSION--', (newConfig.version || 0).toString());
  await fs.writeFile(process.cwd() + '/README.md', readMeMdText);
};
