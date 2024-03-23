import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.heytap.browser',
  name: '浏览器',
  groups: [
    {
      key: 1,
      name: '分段广告-天气详情页广告',
      activityIds: 'com.android.browser.BrowserActivity',
      rules: [
        {
          key: 1,
          matches: 'TextView[text="广告"] + View',
          action: 'clickNode',
          exampleUrls:
            'https://m.gkd.li/110102406/04745ede-48ae-40bd-9717-77e5dd09b2cf',
          snapshotUrls: 'https://i.gkd.li/import/14730543',
        },
        {
          preKeys: [1],
          key: 2,
          matches: 'View[text^="不感兴趣标题"]',
          exampleUrls:
            'https://m.gkd.li/110102406/de29ae18-e54f-435f-ae49-3412c5dd7629',
          snapshotUrls: 'https://i.gkd.li/import/14730551',
          position: {
            left: 'width*0.25',
            top: 'height*0.25',
          },
        },
      ],
    },
  ],
});
