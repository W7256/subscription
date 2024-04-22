import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.falemon.fastlemon',
  name: '快柠檬',
  groups: [
    {
      key: 1,
      matchTime: 10000,
      name: '功能类-每日签到',
      activityIds: 'com.faultyworld.walkthrough.MainActivity',
      rules: [
        {
          key: 1,
          matches: 'Button[desc="每日签到"]',
          actionMaximum: 1,
          resetMatch: 'app',
          action: 'clickNode',
          exampleUrls:
            'https://m.gkd.li/110102406/f27b4391-d810-4b97-891b-b9fbf795e9d3',
          snapshotUrls: 'https://i.gkd.li/i/15061120',
        },
        {
          preKeys: [1],
          key: 2,
          action: 'clickNode',
          matches: 'Button[desc="签到"]',
          exampleUrls:
            'https://m.gkd.li/110102406/dca7b680-46b0-418d-811f-3707f462b675',
          snapshotUrls: 'https://i.gkd.li/i/15061135',
        },
        {
          preKeys: [2],
          key: 3,
          action: 'clickNode',
          matches: 'Button[desc="开心收下"]',
          exampleUrls:
            'https://m.gkd.li/110102406/da6de5a7-dcc8-4c60-9b70-3305b5025bc6',
          snapshotUrls: 'https://i.gkd.li/i/15061136',
        },
        {
          key: 4,
          activityIds: '',
          preKeys: 1,
          matches: 'Button[desc="好的"]',
          exampleUrls:
            'https://m.gkd.li/110102406/ddd970ce-d86c-417a-aadb-38292765610f',
          snapshotUrls: 'https://i.gkd.li/i/15064314',
        },
      ],
    },
  ],
});
