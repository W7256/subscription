import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tencent.wework',
  name: '企业微信',
  groups: [
    {
      key: 1,
      name: '功能类-查看原图',
      rules: [
        {
          quickFind: true,
          activityIds:
            'com.tencent.wework.msg.controller.MediaPreviewerActivity',
          matches: '[text^="查看原图"]',
          exampleUrls:
            'https://m.gkd.li/110102406/23afd49e-ceaf-481d-b59f-02427bcaaac5',
          snapshotUrls: 'https://i.gkd.li/i/14801540',
        },
      ],
    },
  ],
});
