import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xiaomi.mico',
  name: '小爱音箱',
  groups: [
    {
      key: 1,
      name: '首页广告弹窗',
      activityIds: 'com.xiaomi.mico.main.MainActivity',
      rules:
        '[id="com.xiaomi.mico:id/adImage"] + [id="com.xiaomi.mico:id/ivCloseAd"]',
      snapshotUrls: 'https://i.gkd.li/import/12745621',
    },
    {
      key: 2,
      name: '定位提示-开启定位服务',
      desc: '点击取消',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.xiaomi.mico.main.MainActivity',
          matches:
            'Button[id="com.xiaomi.mico:id/ml_alert_dialog_button2"][text="取消"]',
        },
      ],
    },
  ],
});
