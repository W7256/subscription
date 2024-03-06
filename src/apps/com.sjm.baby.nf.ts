import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sjm.baby.nf',
  name: '抖看小剧场',
  groups: [
    {
      key: 1,
      name: '广告弹窗',
      desc: '',
      rules: [
        {
          activityIds: 'com.sjm.baby.nf.MainActivity',
          matches:
            'TextView[text="广告"] - * < ViewGroup -(n+1) ViewGroup > ViewGroup[clickable=true]',
          exampleUrls:
            'https://m.gkd.li/110102406/f24f2e2c-79dc-446e-8abf-d35092910c57',
          snapshotUrls: 'https://i.gkd.li/import/14471924',
        },
      ],
    },
  ],
});
