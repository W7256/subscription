import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.snda.wifilocating',
  name: 'WiFi万能钥匙',
  groups: [
    {
      key: 0,
      name: '内部广告',
      activityIds: 'com.lantern.launcher.ui.MainActivityICS',
      rules: [
        {
          matches: [
            '[id=`com.snda.wifilocating:id/outer_ad_dislike_item_title`][text=`为什么看到此广告`]',
            '@[id=`com.snda.wifilocating:id/outer_ad_dislike_item_one`] [id=`com.snda.wifilocating:id/outer_ad_dislike_item_title`][text=`不感兴趣`]',
          ],
        },
        'ImageView[id=`com.snda.wifilocating:id/feed_item_sdk_logo`] < LinearLayout + [id=`com.snda.wifilocating:id/feed_item_dislike`]',
      ],
    },
    {
      key: 1,
      name: '局部广告-连接页右下角浮窗广告',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.wifitutu.ui.main.MainActivity',
          matches: 'ImageView[id="com.snda.wifilocating:id/img_close"]',
          action: 'clickNode',
          exampleUrls:
            'https://m.gkd.li/110102406/7d4966ee-949f-452b-8265-ba24d4549e08',
          snapshotUrls: 'https://i.gkd.li/i/14806684',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-\'我的\'页面卡片广告',
      rules: [
        {
          activityIds: 'com.wifitutu.ui.main.MainActivity',
          matches:
            'TextView[id="com.snda.wifilocating:id/native_express_ad_logo_tv"][text$="广告"] + ImageView',
          exampleUrls:
            'https://m.gkd.li/110102406/43654e89-a2e5-4f81-9fbb-0751768832eb',
          snapshotUrls: 'https://i.gkd.li/i/14806808',
        },
      ],
    },
  ],
});
