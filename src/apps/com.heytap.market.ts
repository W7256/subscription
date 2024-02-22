import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.heytap.market',
  name: 'OPPO软件商店',
  groups: [
    {
      key: 1,
      name: '版本更新',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds:
        'com.heytap.cdo.client.cards.page.main.maintab.MainTabActivity',
      rules: [
        {
          action: 'back',
          matches:
            '[id="com.heytap.market:id/tv_titile"][text="发现软件商店新版本"]',
          snapshotUrls: 'https://i.gkd.li/import/13455965',
        },
      ],
    },
    {
      name: '局部广告-主页右下角广告',
      key: 2,
      desc: '',
      rules: [
        {
          action: 'clickNode',
          matches:
            'RelativeLayout[id="com.heytap.market:id/view_id_float_ad"] > ImageView[desc="关闭"]',
          matchDelay: 500,
          activityIds: [
            'com.heytap.cdo.client.cards.page.main.maintab.MainTabActivity',
          ],
        },
      ],
    },
  ],
});
