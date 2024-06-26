import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'tv.danmaku.bili',
  name: '哔哩哔哩',
  deprecatedKeys: [3, 5],
  groups: [
    {
      key: -1,
      name: '开屏广告',
      desc: '开屏广告,任意界面切回APP开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="tv.danmaku.bili:id/count_down"][text^="跳"]',
      snapshotUrls: 'https://i.gkd.li/import/12705270',
    },
    {
      key: 0,
      name: '局部广告-评论区顶部公告横幅',
      quickFind: true,
      excludeActivityIds: [
        'com.bilibili.bililive.room.ui.roomv3.LiveRoomActivityV3', // 直播间
        'tv.danmaku.bili.MainActivityV2', // 主页
      ],
      rules:
        'LinearLayout[id=`tv.danmaku.bili:id/ad_tint_frame`] > ImageView[id="tv.danmaku.bili:id/close"][desc=`关闭`]',
      snapshotUrls: [
        'https://i.gkd.li/import/12785461',
        'https://i.gkd.li/import/12775156',
      ],
    },
    {
      key: 1,
      name: '青少年模式弹窗',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: 'TextView[text*="青少年模式"] +n TextView[text="我知道了"]',
      snapshotUrls: 'https://i.gkd.li/import/13746766',
    },
    {
      key: 2,
      name: '分段广告-动态页推荐广告卡片',
      desc: '',
      quickFind: true,
      matchDelay: 5000,
      activityIds: 'tv.danmaku.bili.MainActivityV2',
      rules: [
        {
          key: 1,
          matches: '[id=`tv.danmaku.bili:id/ad_goods_mark_big`]',
          snapshotUrls: 'https://i.gkd.li/import/12700222',
        },
        {
          preKeys: 1,
          matches: '[text="不感兴趣"][id^="tv.danmaku.bili:id/reason"]',
          snapshotUrls: 'https://i.gkd.li/import/12700243',
        },
      ],
    },
    // key = 3已弃用
    {
      enable: false,
      key: 4,
      name: '分段广告-视频底部与评论区中间卡片式广告',
      desc: '',
      quickFind: true,
      activityIds: [
        'com.bilibili.video.videodetail.VideoDetailsActivity',
        'com.bilibili.ship.theseus.all.UnitedBizDetailsActivity',
        'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
      ],
      rules: [
        {
          key: 0,
          name: '点击广告卡片右侧菜单图标',
          matches:
            'FrameLayout[id="tv.danmaku.bili:id/ad_tint_frame"] >n [id^="tv.danmaku.bili:id/more"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12642260', // n = 2
            'https://i.gkd.li/import/12705266', // n = 3
            'https://i.gkd.li/import/12776568', // id="tv.danmaku.bili:id/more_layout"
            'https://i.gkd.li/import/12707070', // 由于 activityId 切换延迟导致规则仍然运行, 使用 FrameLayout 避免误触
          ],
        },
        {
          preKeys: 0,
          key: 1,
          name: '点击屏蔽广告',
          matches:
            '[id="tv.danmaku.bili:id/dislike_reasons"] @RelativeLayout > [text*="不感兴趣"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12642261', // 屏蔽广告菜单弹窗
            'https://i.gkd.li/import/13495649',
          ],
        },
      ],
    },
    // key = 5已弃用
    {
      key: 6,
      name: '更新弹窗',
      quickFind: true,
      actionMaximum: 1,
      matchDelay: 5000,
      activityIds: [
        'com.bilibili.app.preferences.BiliPreferencesActivity',
        'tv.danmaku.bili.ui.splash.ad.page.HotSplashActivity',
        'tv.danmaku.bili.MainActivityV2',
      ],
      rules: [
        {
          key: 1,
          matches: '[id="tv.danmaku.bili:id/update_btn_cancel"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12649689', // com.bilibili.app.preferences.BiliPreferencesActivity
            'https://i.gkd.li/import/13212209', // tv.danmaku.bili.ui.splash.ad.page.HotSplashActivity
            'https://i.gkd.li/import/13228977',
            'https://i.gkd.li/import/13334963',
          ],
        },
      ],
    },
    {
      key: 7,
      name: '局部广告-视频悬浮广告',
      desc: '领取大会员月卡,B站免流星卡',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      activityIds: [
        'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
        'com.bilibili.video.videodetail.VideoDetailsActivity',
      ],
      rules: ['[id="tv.danmaku.bili:id/toast_x"]'],
      snapshotUrls: [
        'https://i.gkd.li/import/12892611',
        'https://i.gkd.li/import/13308344',
        'https://i.gkd.li/import/13538048', // activityIds: 'com.bilibili.video.videodetail.VideoDetailsActivity',
      ],
      exampleUrls: [
        'https://github.com/gkd-kit/inspect/assets/38517192/110db806-3f8b-4cd2-a445-06c5f5eb21eb',
      ],
    },
    {
      key: 8,
      name: '局部广告-直播间卡片广告',
      desc: '直播间底部售卖卡片-点击右上角x',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      activityIds: 'com.bilibili.bililive.room.ui.roomv3.LiveRoomActivityV3',
      rules: '[id="tv.danmaku.bili:id/shopping_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13200549',
    },
    {
      enable: false,
      key: 9,
      name: '通知提示-请求通知权限弹窗',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: [
        'tv.danmaku.bili.MainActivityV2',
        'com.bilibili.video.story.StoryTransparentActivity',
      ],
      rules: '[text$="通知"] +2 * > [id="tv.danmaku.bili:id/close"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13229159',
        'https://i.gkd.li/import/13614090',
      ],
    },
    {
      name: '分段广告-首页-推荐视频卡片广告',
      key: 10,
      enable: false,
      quickFind: true,
      activityIds: ['tv.danmaku.bili.MainActivityV2'],
      rules: [
        {
          key: 0,
          matches: [
            '[desc^="广告"] >(1,2) ViewGroup[childCount=3] > FrameLayout[vid="more"][index=2]',
          ],
          actionMaximum: 1,
          snapshotUrls: [
            'https://i.gkd.li/import/14083540',
            'https://i.gkd.li/import/14059876',
          ],
        },
        {
          name: '点击[不感兴趣]',
          key: 1,
          preKeys: [0],
          matches: ['@* > [text="不感兴趣"]'],
          order: 1,
          snapshotUrls: [
            'https://i.gkd.li/import/13742257',
            'https://i.gkd.li/import/13256605',
            'https://i.gkd.li/import/14155801',
            'https://i.gkd.li/import/13742257',
          ],
        },
        {
          name: '点击[相似内容过多]',
          key: 2,
          preKeys: [0],
          matches: ['@* > [text="相似内容过多"]'],
          order: 2,
          snapshotUrls: [
            'https://i.gkd.li/import/13945597',
            'https://i.gkd.li/import/14155272',
            'https://i.gkd.li/import/14059882',
          ],
          exampleUrls: [
            'https://m.gkd.li/57941037/acd89b46-45fc-459f-8d17-3913d98dcbad',
          ],
        },
        {
          name: '点击[up主不感兴趣]',
          key: 3,
          preKeys: [0],
          matches: ['@* > [text="up主不感兴趣"]'],
          order: 3,
          snapshotUrls: ['https://i.gkd.li/import/13625309'],
          exampleUrls: [
            'https://m.gkd.li/57941037/9c2f42d7-c262-4e06-b3c6-40f0908e7a94',
          ],
        },
      ],
    },
    {
      key: 11,
      name: '广告弹窗-个性化内容推荐弹窗',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'tv.danmaku.bili.MainActivityV2',
      rules:
        '[text="开启个性化内容推荐"] +3 [id="tv.danmaku.bili:id/close_button"]',
      snapshotUrls: 'https://i.gkd.li/import/13448905',
    },
    {
      name: '功能类-展开简介',
      key: 12,
      desc: '视频简介中通常会有一些内容，此规则能帮我们自动展开简介',
      rules: [
        {
          action: 'clickNode',
          matches: ['@ViewGroup > ImageView[desc="展开更多，按钮"]'],
          activityIds: [
            'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
          ],
        },
      ],
    },
    {
      name: '分段广告-首页游戏广告',
      key: 13,
      activityIds: 'tv.danmaku.bili.MainActivityV2',
      rules: [
        {
          key: 1,
          name: '点击广告右下角三个点',
          matches:
            'TextView[text$="分"] - * < LinearLayout +(3+n) * + FrameLayout[id="tv.danmaku.bili:id/more"]',
          action: 'clickNode',
          exampleUrls:
            'https://m.gkd.li/110102406/e9d89ec4-e85b-4c67-a1a6-ecf2f4cb516e',
          snapshotUrls: 'https://i.gkd.li/import/14478514',
        },
        {
          key: 2,
          preKeys: 1,
          name: '不感兴趣',
          matches: 'TextView[text="不感兴趣"] < LinearLayout',
          action: 'clickNode',
          exampleUrls:
            'https://m.gkd.li/110102406/42dcdd30-75eb-4790-acaa-6bd23d12b945',
          snapshotUrls: 'https://i.gkd.li/import/14478551',
        },
      ],
    },
    {
      key: 14,
      name: '功能类-查看原图',
      rules: [
        {
          key: 1,
          quickFind: true,
          action: 'clickNode',
          activityIds:
            'com.bilibili.bplus.followinglist.page.browser.ui.LightBrowserActivityV2',
          matches:
            'TextView[id="tv.danmaku.bili:id/view_origin"][text^="查看原图"]',
          exampleUrls:
            'https://m.gkd.li/110102406/70f439ce-50b2-488d-b120-ba95d767ab65',
          snapshotUrls: 'https://i.gkd.li/import/14731587',
        },
      ],
    },
  ],
});
