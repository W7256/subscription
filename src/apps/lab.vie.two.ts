import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'lab.vie.two',
  name: 'LIBVIO',
  groups: [
    {
      key: 1,
      name: '活动弹窗-账号注册说明弹窗',
      matchTime: 10000,
      desc: '每次打开app的弹窗提示，本规则自动点击【我知道了】',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[desc="账号注册说明"] +2 [desc="我知道了"]',
      snapshotUrls: 'https://i.gkd.li/import/13379070',
    },
    {
      name: '功能类-追剧模式',
      key: 2,
      desc: '每次进入app时点击继续观看xxx',
      rules: [
        {
          matches: ['[desc^="继续观看"]'],
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          snapshotUrls: ['https://i.gkd.li/import/13825341'],
          exampleUrls: [
            'https://m.gkd.li/110102406/4c89164f-663f-4594-9297-6cc832688a5d',
          ],
          activityIds: ['lab.vie.two.MainActivity'],
        },
      ],
    },
  ],
});
