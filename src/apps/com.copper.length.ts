import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.copper.length',
  name: '贝贝',
  groups: [
    {
      key: 1,
      name: '广告弹窗',
      desc: '',
      rules: [
        {
          key: 1,
          activityIds: 'com.androlua.Main',
          matches:
            'ImageView - FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]',
          exampleUrls:
            'https://m.gkd.li/45487685/d54b4136-d732-49c6-8bca-680cb6edb6f9',
          snapshotUrls: 'https://i.gkd.li/import/14398698',
        },
      ],
    },
  ],
});
