import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.qq.reader',
  name: 'QQ阅读',
  deprecatedKeys: [],
  groups: [
    {
      key: 1,
      name: '全屏广告-首页广告',
      rules: [
        {
          quickFind: true,
          activityIds: '',
          matches:
            '[id="com.qq.reader:id/adv_mask_container"] + [id="com.qq.reader:id/close_btn"]',
          action: 'clickNode',
          exampleUrls:
            'https://m.gkd.li/110102406/f514046d-d42e-4c54-8b73-aea713d3213e',
          snapshotUrls: 'https://i.gkd.li/i/14806300',
        },
      ],
    },
    {
      key: 2,
      name: '青少年弹窗',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.qq.reader:id/tv_i_know"]',
      snapshotUrls: 'https://i.gkd.li/import/13194867',
      exampleUrls:
        'https://m.gkd.li/110102406/b60d06ad-a254-465a-b8d3-76843b1a4d6b',
    },
  ],
});
