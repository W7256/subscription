import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.android.settings',
  name: '设置',
  groups: [
    {
      key: 1,
      name: '功能类-打开定位并返回',
      desc: '打开后返回',
      rules: [
        {
          key: 1,
          name: '打开',
          quickFind: true,
          activityIds: 'com.android.settings.Settings$LocationSettingsActivity',
          matches:
            'TextView[text="定位服务"] < RelativeLayout + LinearLayout > Switch[id="android:id/switch_widget"]',
          exampleUrls:
            'https://m.gkd.li/110102406/ba2bb473-bf33-46f4-b323-05e8e5490f4f',
          snapshotUrls: 'https://i.gkd.li/import/14694405',
        },
        {
          key: 2,
          name: '返回',
          preKeys: [1],
          action: 'back',
          quickFind: true,
          activityIds: 'com.android.settings.Settings$LocationSettingsActivity',
          matches: 'TextView[text="WLAN 和蓝牙扫描"]',
          exampleUrls:
            'https://m.gkd.li/110102406/e9313757-dbbb-4205-9b08-73602fddf5d6',
          snapshotUrls: 'https://i.gkd.li/import/14694413',
        },
      ],
    },
  ],
});
