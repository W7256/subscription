import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.alicloud.databox',
  name: '阿里云盘',
  groups: [
    {
      key: 0,
      name: '功能类-自动签到',
      activityIds: 'com.alicloud.databox.MainActivity',
      rules: [
        {
          key: 0,
          name: '自动签到',
          matches: ['[id="com.alicloud.databox:id/tvTaskAction"][text="领取"]'],
          snapshotUrls: 'https://i.gkd.li/import/12929318',
          exampleUrls:
            'https://m.gkd.li/110102406/fd8585ec-0107-4afc-b278-16fe25197d85',
          quickFind: true,
        },
        {
          key: 1,
          preKeys: [0],
          name: '在签到后，关闭弹窗',
          matches: ['[id="com.alicloud.databox:id/ivClose"]'],
          snapshotUrls: 'https://i.gkd.li/import/13038304',
          exampleUrls:
            'https://m.gkd.li/110102406/34448d6b-3257-4e8a-98c1-1a8c5265d166',
          quickFind: true,
        },
      ],
    },
    {
      key: 1,
      name: '活动弹窗',
      activityIds: 'com.alicloud.databox.MainActivity',
      rules: '[text^="好运盲盒"] >n View > Image + TextView[clickable=true]',
      snapshotUrls: 'https://i.gkd.li/import/13228610',
    },
    {
      key: 2,
      name: '功能类-时光设备间-自动点击“开心收下”',
      activityIds:
        'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main',
      actionMaximum: 1,
      resetMatch: 'activity',
      matchTime: 10000,
      rules: 'View[childCount=9] > @Image -2 View[childCount=5]',
      snapshotUrls: 'https://i.gkd.li/import/13596924',
    },
    {
      key: 3,
      name: '更新提示-版本更新',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      activityIds: 'com.alicloud.databox.MainActivity',
      rules: [
        {
          matches: '[text^="立即了解"] -3 View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/13806865',
        },
      ],
    },
  ],
});
