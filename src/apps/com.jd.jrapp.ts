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
      name: '更新提示',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.jd.jrapp.bm.mainbox.main.MainActivity',
      rules:
        '@ImageButton[id="com.jd.jrapp:id/ib_close"] + RelativeLayout [text^="发现新版本"]',
      snapshotUrls: 'https://i.gkd.li/import/13628364',
      exampleUrls:
        'https://m.gkd.li/110102406/b4b1bf62-ab34-4b97-8dd9-5638b922e50d',
    },
    {
      key: 3,
      name: '广告弹窗-满意度打分',
      actionMaximum: 1,
      resetMatch: 'activity',
      rules: '[text*="满意度打几分"] + ImageView',
      snapshotUrls: 'https://i.gkd.li/import/13804561',
      exampleUrls:
        'https://m.gkd.li/110102406/1933f731-aea0-49f1-acbf-e5941d5afa5f',
    },
  ],
});
