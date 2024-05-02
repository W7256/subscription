import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.chinamworld.bocmbci',
  name: '中国银行',
  groups: [
    {
      key: 1,
      name: '功能类-登录',
      rules: [
        {
          key: 1,
          action: 'clickNode',
          matchTime: 10000,
          quickFind: true,
          activityIds:
            'com.boc.bocsoft.mobile.bocmobile.buss.system.main.ui.MainActivity',
          matches:
            'ImageView[id="com.chinamworld.bocmbci:id/iv_icon"] <<n * < LinearLayout[id="com.chinamworld.bocmbci:id/left_button"][desc="登录"]',
          exampleUrls:
            'https://m.gkd.li/110102406/d6d9e5dd-5b47-4f88-abe5-1894053967e2',
          snapshotUrls: 'https://i.gkd.li/import/14704735',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告',
      rules: [
        {
          quickFind: true,
          activityIds:
            'com.boc.bocsoft.mobile.bocmobile.buss.system.main.ui.MainActivity',
          matches: '[id="com.chinamworld.bocmbci:id/btn_action"]',
          exampleUrls: [
            'https://m.gkd.li/110102406/d6723d8a-e53b-4a67-9c5d-e330d394138a',
            'https://m.gkd.li/110102406/54f1e7b9-8fb5-4103-89f1-2b18445e74b5',
          ],
          snapshotUrls: 'https://i.gkd.li/i/15183441',
        },
      ],
    },
  ],
});
