import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sf.activity',
  name: '顺丰速运',
  groups: [
    {
      name: '开屏广告',
      key: 0,
      desc: '',
      rules: [
        {
          action: 'clickCenter',
          matches: ['@Button > ViewGroup > TextView[text^="跳过"]'],
          quickFind: true,
          activityIds: ['com.sf.activity.MainActivity'],
        },
      ],
    },
    {
      key: 1,
      name: '更新弹窗',
      activityIds: 'com.sf.activity.MainActivity',
      rules: [
        {
          key: 0,
          matches:
            '@[text="取消"] < ViewGroup - ScrollView >(2) [text*="新版本"]',
          snapshotUrls: 'https://i.gkd.li/import/12642445',
        },
        {
          key: 1,
          matches: '@[desc="取消"] - ViewGroup >n [text="立即升级"]',
          snapshotUrls: 'https://i.gkd.li/import/13291144',
        },
      ],
    },
    {
      key: 2,
      name: '专属月报弹窗',
      activityIds: 'com.sf.activity.MainActivity',
      rules: ['[id="MonthReportDialogCloseBtn"] > ImageView'],
      snapshotUrls: 'https://i.gkd.li/import/12642441',
    },
  ],
});
