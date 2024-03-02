import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tal.kaoyan',
  name: '考研帮',
  groups: [
    {
      key: 1,
      name: '功能类-选择院校所在地区',
      desc: '选好专业后，在筛选页面点击"所在地区"，以筛选特定地区的院校,将规则复制到本地后，将text后的"北京"改为需要的地区即可',
      activityIds: 'com.tal.qz.courselistlibrary.QzWebViewActivity',
      rules: [
        {
          key: 1,
          name: '点击所在地区',
          action: 'clickNode',
          matches: 'View > @Button[text="所在地区"] +4 Button',
          exampleUrls:
            'https://m.gkd.li/110102406/a3503f34-63c9-4b58-9789-c97cd2ce127c',
          snapshotUrls: 'https://i.gkd.li/import/14445606',
        },
        {
          key: 2,
          name: '点击某指定地区',
          preKeys: 1,
          action: 'clickNode',
          matches: 'View >n Button + Button[text="北京"]',
          exampleUrls:
            'https://m.gkd.li/110102406/1b9290f6-f2af-42fa-b36a-5ac5c68ffd85',
          snapshotUrls: 'https://i.gkd.li/import/14445252',
        },
      ],
    },
    {
      key: 2,
      name: '功能类-选择院校属性',
      desc: '选好专业后，在筛选页面点击"院校属性"，以筛选特定属性院校,将规则复制到本地后，将text后的211改为985或其它即可',
      activityIds: 'com.tal.qz.courselistlibrary.QzWebViewActivity',
      rules: [
        {
          key: 1,
          name: '点击\'学校属性\'',
          action: 'clickNode',
          matches: 'View > Button + @Button[text="学校属性"]',
          exampleUrls:
            'https://m.gkd.li/110102406/4fd676b9-79ad-4403-a56b-2ded92f6e424',
          snapshotUrls: 'https://i.gkd.li/import/14445606',
        },
        {
          key: 2,
          preKeys: 1,
          name: '点击某指定属性',
          action: 'clickNode',
          matches: 'View > Button[text^="全部"] +n Button[text="211"]',
          exampleUrls:
            'https://m.gkd.li/110102406/edbcd7b2-524c-4dfe-8b6b-dda61dd4e5aa',
          snapshotUrls: 'https://i.gkd.li/import/14445368',
        },
      ],
    },
    {
      key: 3,
      name: '功能类-选择\'学科门类\'及专业',
      desc: '在找专业页面点击\'学科门类\',随后选择某具体专业。复制本规则到本地后，将desc后的\'工学\'及text后的\'信息与通信工程\'改为需要的门类即可',
      activityIds: 'com.tal.qz.courselistlibrary.QzWebViewActivity',
      rules: [
        {
          key: 1,
          name: '点击\'学科门类\'',
          action: 'clickNode',
          matches: 'View >n Button[text="学科门类"]',
          exampleUrls:
            'https://m.gkd.li/110102406/5761c5b6-6f8d-40cc-92b4-58c9377be15f',
          snapshotUrls: 'https://i.gkd.li/import/14468436',
        },
        {
          key: 2,
          preKeys: 1,
          name: '点击某指定门类',
          action: 'clickNode',
          matches: 'View >n @View[desc="工学"] > TextView',
          exampleUrls:
            'https://m.gkd.li/110102406/c0602d13-7b9d-4c45-808e-90207e7b1e5c',
          snapshotUrls: 'https://i.gkd.li/import/14468492',
        },
        {
          key: 3,
          preKeys: [1, 2],
          name: '点击某具体专业',
          action: 'clickNode',
          matches:
            'View > TextView[text="全部"] +n TextView[text="信息与通信工程"]',
          exampleUrls:
            'https://m.gkd.li/110102406/c0602d13-7b9d-4c45-808e-90207e7b1e5c',
          snapshotUrls: 'https://i.gkd.li/import/14468492',
        },
      ],
    },
  ],
});
