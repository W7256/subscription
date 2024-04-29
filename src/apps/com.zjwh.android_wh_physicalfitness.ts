import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.zjwh.android_wh_physicalfitness',
  name: '运动世界校园',
  deprecatedKeys: [],
  groups: [
    {
      key: 1,
      name: '优量汇广告',
      activityIds: [
        'com.zjwh.android_wh_physicalfitness.activity.HomeActivity',
        'com.zjwh.android_wh_physicalfitness.ui.AdActivity',
      ],
      rules: [
        {
          matches:
            'ImageView - RelativeLayout >(3-n) [id="com.zjwh.android_wh_physicalfitness:id/iv_close"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/12673231',
            'https://i.gkd.li/import/12673523',
            'https://i.gkd.li/import/13166472', // com.zjwh.android_wh_physicalfitness.ui.AdActivity
          ],
        },
      ],
    },
    {
      key: 2,
      name: '百青藤广告',
      activityIds:
        'com.zjwh.android_wh_physicalfitness.activity.SplashActivity',
      rules: [
        {
          matches:
            '@[text="跳过"][clickable=true] +(3) RelativeLayout >(2) [text="点击跳转至第三方页面"]',
          snapshotUrls: ['https://i.gkd.li/import/12673349'],
        },
      ],
    },
    {
      key: 3,
      name: '快手广告',
      activityIds: [
        'com.zjwh.android_wh_physicalfitness.activity.SplashActivity',
        'com.zjwh.android_wh_physicalfitness.ui.AdActivity',
      ],
      rules: [
        {
          key: 0,
          matches:
            '[id="com.kwad.dy.sdk:id/ksad_splash_root_container"] >n ViewGroup > [text="跳过"]',
          snapshotUrls: 'https://i.gkd.li/import/12673495',
        },
        {
          key: 1,
          matches:
            '[id="com.kwad.dy.sdk:id/ksad_tk_view"] >n ViewGroup > @ViewGroup[clickable=true] > ImageView',
          snapshotUrls: [
            'https://i.gkd.li/import/12826112',
            'https://i.gkd.li/import/12826124',
          ],
        },
        {
          key: 2,
          matches:
            '[id="com.zjwh.android_wh_physicalfitness:id/ksad_tk_view"] >n ViewGroup > @ViewGroup[childCount=1] > ImageView',
          snapshotUrls: [
            'https://i.gkd.li/import/13228216',
            'https://i.gkd.li/import/13601132', //com.zjwh.android_wh_physicalfitness.ui.AdActivity
          ],
        },
      ],
    },
    {
      key: 4,
      name: '百度广告',
      activityIds: 'com.baidu.mobads.sdk.api.MobRewardVideoActivity',
      actionMaximum: 1,
      resetMatch: 'activity',
      matchTime: 10000,
      rules: '@ImageView - RelativeLayout[childCount=9]',
      snapshotUrls: 'https://i.gkd.li/import/13554229',
    },
    {
      key: 5,
      name: '全屏广告',
      activityIds: [
        'com.zjwh.android_wh_physicalfitness.activity.mine.RunHistoryDetailActivity',
        'com.zjwh.android_wh_physicalfitness.activity.HomeActivity',
      ],
      rules: [
        {
          key: 1,
          matches:
            'TextView[text="摇动/点击了解更多内容"] <<(2n+2) FrameLayout + FrameLayout',
          matchDelay: 500,
          exampleUrls:
            'https://m.gkd.li/110102406/279e460d-602c-43a5-a742-77226be5cfda',
          snapshotUrls: 'https://i.gkd.li/i/14755382',
        },
        {
          key: 2,
          matches: 'TextView[text$="广告"] < ViewGroup - ViewGroup > ViewGroup',
          action: 'clickNode',
          exampleUrls:
            'https://m.gkd.li/110102406/8dd73677-9cc2-407f-ad17-cfb4ed6489b1',
          snapshotUrls: 'https://i.gkd.li/i/14757386',
        },
        {
          key: 3,
          matches:
            'TextView[text="摇动/点击了解更多内容"] <<(1n+2) FrameLayout -(n+1) FrameLayout',
          matchDelay: 500,
          exampleUrls:
            'https://m.gkd.li/110102406/4a22e758-ec66-48ff-ad30-3e743d6d0b0d',
          snapshotUrls: 'https://i.gkd.li/i/14757683',
        },
        {
          key: 4,
          quickFind: true,
          matches: '[id="com.zjwh.android_wh_physicalfitness:id/ad_close"]',
          exampleUrls:
            'https://m.gkd.li/110102406/9469922a-6e8c-48cd-a2cc-fda9142ab8b9',
          snapshotUrls: 'https://i.gkd.li/i/15145690',
        },
        {
          key: 5,
          matches:
            'TextView[text^="应​用​名​称"][text*="​备​案​号​"] < LinearLayout - * > FrameLayout > FrameLayout[index=1]',
          exampleUrls:
            'https://m.gkd.li/110102406/f5f08706-2232-4d87-b747-a663e2d1a497',
          snapshotUrls: 'https://i.gkd.li/i/15145708',
        },
      ],
    },
    {
      key: 9,
      name: '第三方SDK广告', // 不知道是什么SDK
      activityIds: 'com.zjwh.android_wh_physicalfitness.activity.HomeActivity',
      rules: [
        {
          matches:
            '[id="com.zjwh.android_wh_physicalfitness:id/ad_flag_source_layout"] + [id="com.zjwh.android_wh_physicalfitness:id/iv_close"][clickable=true]',
          snapshotUrls: ['https://i.gkd.li/import/12673476'],
        },
      ],
    },
  ],
});
