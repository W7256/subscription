import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xunmeng.pinduoduo',
  name: '拼多多',
  groups: [
    {
      key: 1,
      name: '更新弹窗',
      rules: [
        {
          key: 0,
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
          matches:
            '[text*="新版本"] - ImageView < LinearLayout < LinearLayout + ImageButton[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/12642017',
        },
        {
          key: 1,
          activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
          matches: '@Image + Image +n [text="立即升级"]',
          snapshotUrls: 'https://i.gkd.li/import/13195645',
        },
      ],
    },
    {
      key: 2,
      name: '活动弹窗-首页优惠弹窗',
      rules: [
        {
          key: 0,
          name: '首页优惠弹窗1',
          activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
          matches:
            'FrameLayout > FrameLayout > RelativeLayout[childCount=2] > @ImageView[id!=null][clickable=true][visibleToUser=true] + ImageView',
          snapshotUrls: 'https://i.gkd.li/import/12642015',
          exampleUrls:
            'https://m.gkd.li/110102406/eb338ccf-92a3-414b-9e79-cfbd90d4d1d6',
        },
        {
          key: 1,
          name: '首页优惠弹窗2',
          activityIds: [], // 暂时用[]，后续补充activityIds
          matches:
            'View[id=null] > TextView + View > View +(4) View[clickable=true] > Image[id=null]',
          snapshotUrls: 'https://i.gkd.li/import/12642019',
          exampleUrls:
            'https://m.gkd.li/110102406/d43cc24d-119f-4d17-bf35-be90bee3a3af',
        },
        {
          key: 2,
          name: '首页优惠弹窗3',
          activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
          matches:
            '@ImageView < ViewGroup[clickable=true][visibleToUser=true] < ViewGroup + ViewGroup >n [text="开心收下"]',
          snapshotUrls: 'https://i.gkd.li/import/13761182',
          exampleUrls:
            'https://m.gkd.li/110102406/54ae525e-a290-4d3d-9d45-83b06f7b8e35',
        },
      ],
    },
    {
      key: 3,
      name: '活动弹窗',
      rules: [
        {
          key: 0,
          name: '抽免单活动1',
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
          matches:
            'TextView[text="免单特权"] < View < View +(5) View[clickable=true] > Image[id=null]',
          snapshotUrls: 'https://i.gkd.li/import/12642032',
          exampleUrls:
            'https://m.gkd.li/110102406/b4a78456-ebde-4a52-8273-1eea979565df',
        },
        {
          key: 1,
          name: '抽免单活动2',
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
          matches:
            'TextView[text$="抽免单"] -(2) Image[id=null][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/12642038',
          exampleUrls:
            'https://m.gkd.li/110102406/ebbab50c-3eb1-486d-a7f4-139d5464d1d5',
        },
        {
          key: 2,
          name: '下单后追加订单',
          activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
          matches: '@[text="关闭弹窗"][clickable=true] + [text$="下单成功"]',
          snapshotUrls: 'https://i.gkd.li/import/13308175',
          exampleUrls:
            'https://m.gkd.li/110102406/0e1d6880-cb47-47cb-8303-37f5ac81db12',
        },
      ],
    },
    {
      key: 4,
      name: '红包弹窗',
      rules: [
        {
          key: 0,
          activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
          matches:
            '@ImageView[id=null][clickable=true] < ViewGroup + ViewGroup > ImageView + ViewGroup > ImageView +(2) FrameLayout > TextView[text="专属现金红包"]',
          snapshotUrls: 'https://i.gkd.li/import/12642023',
        },
        {
          key: 1,
          activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
          quickFind: true,
          matches:
            '@ImageView[clickable=true] < ViewGroup + ViewGroup >n [text="送你大额现金"]',
          snapshotUrls: 'https://i.gkd.li/import/13625441',
        },
        {
          key: 2,
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
          matches:
            '[text="百亿补贴"] > View > View > @View[clickable=true] +n [text^="立即领取"]',
          snapshotUrls: 'https://i.gkd.li/import/13669963',
        },
      ],
    },
    {
      enable: false,
      key: 5,
      name: '全屏广告-多多买菜抽奖弹窗',
      activityIds: ['com.xunmeng.pinduoduo.activity.NewPageActivity'],
      rules: [
        'View[childCount=1] > Button[id=null][text="关闭弹窗"][clickable=true]',
      ], //添加父节点条件。原规则会与退换货选择货物弹窗冲突。https://i.gkd.li/import/13830730
      snapshotUrls: ['https://i.gkd.li/import/12642053'],
    },
    {
      key: 6,
      name: '局部广告-多多视频悬浮窗广告',
      activityIds: ['com.xunmeng.pinduoduo.ui.activity.HomeActivity'],
      rules: [
        '@TextView[id=null][clickable=true] + Image[id=null][text="webp"]',
        '@TextView[id=null][clickable=true] + View > Image[text="webp"]',
      ],
      snapshotUrls: ['https://i.gkd.li/import/12642058'],
      exampleUrls:
        'https://m.gkd.li/110102406/9a722036-ad75-4dda-a359-d89d16c5aaa0',
    },
    {
      enable: false,
      key: 7,
      name: '活动弹窗-多多视频每日签到弹窗',
      activityIds: ['com.xunmeng.pinduoduo.ui.activity.HomeActivity'],
      rules: [
        '@ImageView[id=null] < ViewGroup < ViewGroup +(2) ViewGroup >(n) [text^="每日签到"]',
        'ViewGroup[childCount=5] > @ViewGroup[index=0][clickable=true] +3 ViewGroup >2 [text="分享现金红包至拼小圈"]',
      ],
      snapshotUrls: [
        'https://i.gkd.li/import/12700615',
        'https://i.gkd.li/import/13804657', //规则2
      ],
    },
    {
      enable: false,
      key: 8,
      name: '局部广告-商品详情页视频讲解窗口',
      activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
      rules: '[id="com.xunmeng.pinduoduo:id/iv_float_window_close"] > TextView',
      snapshotUrls: 'https://i.gkd.li/import/13178326',
    },
    {
      enable: false,
      key: 9,
      name: '功能类-多多视频每日自动签到',
      quickFind: true,
      actionMaximum: 1,
      activityIds: ['com.xunmeng.pinduoduo.ui.activity.HomeActivity'],
      rules: [
        {
          key: 0,
          name: '自动签到',
          action: 'clickCenter',
          matchDelay: 500,
          matches: ['FrameLayout > TextView[text="领取今日现金"]'],
          snapshotUrls: [
            'https://i.gkd.li/import/13201422', //com.xunmeng.pinduoduo.ui.activity.HomeActivity
            'https://i.gkd.li/import/13372677', //com.bbk.launcher2.Launcher
          ],
        },
        {
          key: 1,
          preKeys: [0],
          name: '在签到后关闭弹窗',
          action: 'clickCenter',
          matches: ['FrameLayout > TextView[text="明日继续来领"]'],
          matchDelay: 500,
          snapshotUrls: 'https://i.gkd.li/import/13205634',
        },
      ],
    },
    {
      enable: false,
      key: 10,
      name: '功能类-多多视频-划到广告自动跳过',
      desc: '点击返回自动刷新，从而跳过广告',
      quickFind: true,
      activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
      rules: [
        {
          matches: [
            'TextView[text="正在直播"]',
            '@ImageView[desc="返回"] <4 ViewGroup <<3 FrameLayout[id="android:id/content"]',
          ],
          snapshotUrls: 'https://i.gkd.li/import/13446291',
        },
        {
          matches: [
            'TextView[text="查看更多低价商品"]',
            '@ImageView[desc="返回"] <4 ViewGroup <<3 FrameLayout[id="android:id/content"]',
          ],
          snapshotUrls: 'https://i.gkd.li/import/13791119',
        },
      ],
    },
    {
      key: 11,
      name: '功能类-自动点击原图',
      activityIds:
        'com.xunmeng.pinduoduo.app_album.album.MultiImageSelectorActivity',
      quickFind: true,
      rules: '@[text="原图"][checked=false] + [text="发送"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13925378', // checked=false
        'https://i.gkd.li/import/13925380', // checked=true
      ],
    },
    {
      key: 12,
      quickFind: true,
      name: '全屏广告-下单成功邀请好友弹窗',
      desc: '点击X',
      rules: [
        {
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageMaskActivity',
          matches: '[id="com.xunmeng.pinduoduo:id/pdd"] >7 [text="关闭弹窗"]',
          snapshotUrls: 'https://i.gkd.li/import/13927594',
          exampleUrls:
            'https://m.gkd.li/110102406/0064ffe4-e5c1-4b69-a411-188c2e2f65cf',
        },
      ],
    },
    {
      key: 13,
      name: '全屏广告-首页广告',
      rules: [
        {
          matchTime: 10000,
          activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
          matches:
            '@ImageView <<(1n+2) ViewGroup <<(1n+4) FrameLayout[desc="拍照搜索"]',
          action: 'clickNode',
          actionMaximum: 1,
          resetMatch: 'app',
          snapshotUrls: 'https://i.gkd.li/import/14734863',
          exampleUrls:
            'https://m.gkd.li/110102406/881d9974-000f-4c73-9e54-5979f9c6ad93',
        },
      ],
    },
  ],
});
