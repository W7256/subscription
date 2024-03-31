import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'android.zhibo8',
  name: '直播吧',
  deprecatedKeys: [0],
  groups: [
    {
      key: 1,
      name: '分段广告-信息流广告',
      quickFind: true,
      activityIds: 'android.zhibo8.ui.contollers.main.MainActivity',
      rules: [
        {
          key: 0,
          name: '点击[查看详情]右侧x',
          matches:
            '@[id="android.zhibo8:id/iv_tip"] - [id="android.zhibo8:id/tv_app_download_2"]',
          snapshotUrls: 'https://i.gkd.li/import/12841134',
          exampleUrls:
            'https://m.gkd.li/110102406/ad5d8171-39fe-43ed-b1ff-db07cbe904c5',
        },
        {
          key: 1, //不重叠不需要preKeys
          name: '点击[不感兴趣]',
          matches:
            '@LinearLayout > [id="android.zhibo8:id/tv_title"][text="不感兴趣"]', // issues/1656, 直接指向text可能不工作
          snapshotUrls: 'https://i.gkd.li/import/12841135',
          exampleUrls:
            'https://m.gkd.li/110102406/a2811e16-e0cb-4eb4-b384-12f70401648b',
        },
        {
          key: 2,
          name: '点击【广告】右侧的x',
          matches:
            '[text="广告"] <3 LinearLayout +2 [visibleToUser=true][id="android.zhibo8:id/iv_tip"]',
          snapshotUrls: 'https://i.gkd.li/import/13786148',
          exampleUrls:
            'https://m.gkd.li/110102406/c6d03652-9845-47e3-a24e-0b6529cbf970',
        },
      ],
    },
  ],
});
