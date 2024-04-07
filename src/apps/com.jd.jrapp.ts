import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jd.jrapp',
  name: '京东金融',
  groups: [
    {
      key: 1,
      name: '通知提示',
      activityIds: ['com.jd.jrapp.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 1,
          matches: 'TextView[text="开启系统通知"] - TextView',
          action: 'clickNode',
          snapshotUrls: 'https://i.gkd.li/i/14896436',
          exampleUrls:
            'https://m.gkd.li/110102406/0fc51cd6-23bd-4de9-99b5-212de59353db',
        },
      ],
    },
    {
      key: 2,
      name: '版本更新',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.jd.jrapp.bm.mainbox.main.MainActivity',
      rules:
        '@ImageButton[id="com.jd.jrapp:id/ib_close"] + RelativeLayout [text^="发现新版本"]',
      snapshotUrls: 'https://i.gkd.li/import/13628364',
    },
    {
      key: 3,
      name: '满意度打分弹窗',
      actionMaximum: 1,
      resetMatch: 'activity',
      rules: '[text*="满意度打几分"] + ImageView',
      snapshotUrls: 'https://i.gkd.li/import/13804561',
    },
  ],
});
