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
  ],
});
