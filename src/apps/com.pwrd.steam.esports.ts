import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.pwrd.steam.esports',
  name: '完美世界电竞',
  groups: [
    {
      key: 1,
      name: '通知提示-请求打开推送通知',
      desc: '',
      rules: [
        {
          key: 1,
          quickFind: true,
          matches:
            'TextView[text="开启推送通知"] + ImageView[id="com.pwrd.steam.esports:id/tv_close"]',
          exampleUrls:
            'https://m.gkd.li/110102406/de5d251c-d592-421c-93c2-2f2ce12d35e1',
          snapshotUrls: 'https://i.gkd.li/import/14414463',
        },
      ],
    },
  ],
});
