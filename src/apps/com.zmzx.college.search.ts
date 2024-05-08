import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.zmzx.college.search',
  name: '大学搜题酱',
  deprecatedKeys: [4],
  groups: [
    {
      enable: false,
      key: 1,
      name: '首页-推送通知',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds:
        'com.zmzx.college.search.activity.main.activity.MainActivity',
      rules: 'ImageView[id="com.zmzx.college.search:id/siv_dialog_close"]',
      snapshotUrls: 'https://i.gkd.li/import/12867853',
    },
    {
      key: 2,
      name: '全屏广告',
      rules: [
        {
          key: 0,
          name: '腾讯广告',
          quickFind: true,
          activityIds: [
            'com.zmzx.college.search.activity.main.activity.MainActivity',
            'com.zmzx.college.search.activity.questionsearch.camera.activity.PicSearchResultActivity',
          ],
          matches: 'ImageView[id="com.zmzx.college.search:id/iv_close"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12867751',
            'https://i.gkd.li/import/12894813',
          ],
        },
        {
          key: 1,
          name: '快手广告-1',
          activityIds: 'com.bbk.launcher2.Launcher',
          matches:
            '[text="广告"] <2 ViewGroup -3 ViewGroup > @ViewGroup[clickable=true] > ImageView',
          snapshotUrls: 'https://i.gkd.li/import/13346628',
        },
        {
          key: 2,
          name: '快手广告-2',
          activityIds:
            'com.zmzx.college.search.activity.main.activity.MainActivity',
          matches: [
            'ViewGroup > ViewGroup > ViewGroup[childCount=2] > ImageView + [text="广告"]',
            'ViewGroup > ViewGroup > @ViewGroup[childCount=1][clickable=true] > ImageView[childCount=0]',
          ],
          snapshotUrls: 'https://i.gkd.li/import/13451304',
        },
        {
          key: 3,
          name: '字节广告-1',
          activityIds:
            'com.zmzx.college.search.activity.camerasdk.ZybCameraSDKActivity',
          matches:
            '[id="com.zmzx.college.search:id/ad_flag_source_layout"] + [id="com.zmzx.college.search:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/import/13522998',
        },
        {
          key: 4,
          name: '字节广告-2',
          activityIds:
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTFullScreenVideoActivity',
          matches: '@Image < View +3 View > View > TextView[text$="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/13523288',
        },
        {
          key: 5,
          name: '字节广告-3',
          quickFind: true,
          activityIds:
            'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
          matches:
            '@[clickable=true] > [id="com.zmzx.college.search:id/tt_reward_full_count_down_after_close"]',
          snapshotUrls: 'https://i.gkd.li/import/12893408',
        },
        {
          key: 6,
          activityIds:
            'com.zmzx.college.search.activity.main.activity.MainActivity',
          matches:
            'TextView[text^="应​用​名​称​："][text*="备​案​号​：​"] < LinearLayout - FrameLayout > FrameLayout[index=1]',
          exampleUrls:
            'https://m.gkd.li/110102406/3cde49f3-1b83-4081-b25e-e5adda57b9d5',
          snapshotUrls: 'https://i.gkd.li/i/15234305',
        },
        {
          key: 7,
          quickFind: true,
          activityIds: 'com.mercury.sdk.activity.InterstitialPortraitActivity',
          matches: 'ImageView[id="com.zmzx.college.search:id/iv_itr_close"]',
          exampleUrls:
            'https://m.gkd.li/110102406/0df8b382-fba3-44f3-9a81-13890c203fe2',
          snapshotUrls: 'https://i.gkd.li/i/15234293',
        },
        {
          key: 8,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: 'TextView[text="反馈"] -2 View',
          exampleUrls:
            'https://m.gkd.li/110102406/f028ffee-7184-48eb-8975-c4b35c9b2312',
          snapshotUrls: 'https://i.gkd.li/i/15246126',
        },
        {
          key: 9,
          activityIds: 'com.baidu.mobads.sdk.api.MobRewardVideoActivity',
          matches:
            'TextView[text="摇动手机  了解更多"] <<4 RelativeLayout - * < RelativeLayout - ImageView',
          exampleUrls:
            'https://m.gkd.li/110102406/4e44b827-6894-4537-bd1c-333e4334a905',
          snapshotUrls: 'https://i.gkd.li/i/15246154',
        },
      ],
    },
    {
      key: 3,
      name: '局部广告',
      rules: [
        {
          key: 0,
          quickFind: true,
          activityIds:
            'com.zmzx.college.search.activity.booksearch.result.activity.SearchScanCodeResultDxActivity',
          matches: '[vid="close_m_image_left_text_right_app_compliance"]',
          snapshotUrls: 'https://i.gkd.li/import/13849755',
        },
        {
          key: 1,
          quickFind: true,
          activityIds:
            'com.zmzx.college.search.activity.booksearch.result.activity.SearchScanCodeResultDxActivity',
          matches:
            '[id^="com.zmzx.college.search:id/ad_flag_source"] - * > [id="com.zmzx.college.search:id/close"]',
          snapshotUrls: 'https://i.gkd.li/import/13063381',
        },
      ],
    },
    {
      key: 5,
      name: '升级弹窗',
      enable: false,
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: [
        'com.zmzx.college.search.activity.main.activity.MainActivity',
        'com.zmzx.college.search.activity.init.InitActivity',
      ],
      rules: '[id="com.zmzx.college.search:id/update_close"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13063373',
        'https://i.gkd.li/import/13623469',
      ],
    },
    {
      key: 6,
      name: '申请开启推送通知弹窗',
      enable: false,
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          matches:
            '[text="开启推送通知"] - [id="com.zmzx.college.search:id/siv_dialog_close"]',
          snapshotUrls: 'https://i.gkd.li/import/13440939',
        },
      ],
    },
    {
      key: 7,
      name: '请求好评弹窗',
      activityIds:
        'com.zmzx.college.search.activity.camerasdk.ZybCameraSDKActivity',
      quickFind: true,
      rules:
        '[id="com.zmzx.college.search:id/iv_logo"] + [id="com.zmzx.college.search:id/siv_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13476308',
    },
    {
      key: 8,
      name: '局部广告-教材内弹窗广告1',
      quickFind: true,
      activityIds: [
        'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
      ],
      rules: '[id="com.byted.pangle.m:id/tt_reward_full_count_down_after"]',
      snapshotUrls: ['https://i.gkd.li/import/13929945'],
    },
    {
      key: 9,
      name: '局部广告-教材内弹窗广告2',
      quickFind: true,
      activityIds: [
        'com.zmzx.college.search.activity.booksearch.result.activity.AnswerBrowseActivity',
      ],
      rules: '[id="com.zmzx.college.search:id/iv_close"]',
      snapshotUrls: ['https://i.gkd.li/import/13929981'],
    },
    {
      key: 10,
      name: '局部广告-教材内底部广告',
      quickFind: true,
      activityIds: [
        'com.zmzx.college.search.activity.booksearch.result.activity.AnswerBrowseActivity',
      ],
      rules:
        '[id="com.zmzx.college.search:id/close_m_image_left_text_right_app_compliance"]',
      snapshotUrls: ['https://i.gkd.li/import/13929965'],
    },
  ],
});
