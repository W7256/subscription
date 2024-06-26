import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tencent.mm',
  name: '微信',
  deprecatedKeys: [6, 8],
  groups: [
    {
      enable: false,
      key: 0,
      name: '分段广告-朋友圈广告',
      desc: '点击广告卡片右上角广告,直接关闭/出现菜单,确认关闭',
      quickFind: true,
      activityIds: [
        'com.tencent.mm.plugin.sns.ui.SnsTimeLineUI',
        'com.tencent.mm.plugin.sns.ui.improve.ImproveSnsTimelineUI',
      ],
      exampleUrls: [
        'https://github.com/gkd-kit/subscription/assets/38517192/c9ae4bba-a748-4755-b5e4-c7ad3d489a79',
      ],
      rules: [
        {
          key: 0,
          name: '点击广告卡片右上角',
          matches:
            'ImageView - TextView[text="广告"][clickable=true][id!=null]',
          snapshotUrls: [
            'https://i.gkd.li/import/12642588',
            'https://i.gkd.li/import/12888129', //ImageView - TextView[text="广告"][id!=null][index=0]这个规则无法匹配该广告，需要删除[index=0]
            'https://i.gkd.li/import/12907641',
            'https://i.gkd.li/import/13000395',
          ],
        },
        // 以下是[确认关闭按钮]出现的情况
        // 情况1 - 你觉得这条广告怎么样->直接关闭
        {
          preKeys: 0,
          key: 1,
          name: '你觉得这条广告怎么样-点击[关闭该广告]',
          matches:
            '@LinearLayout[clickable=true][childCount=2] > [text="关闭该广告"]',
          snapshotUrls: ['https://i.gkd.li/import/12642584'],
        },
        {
          preKeys: 1,
          key: 2,
          name: '关闭该广告的原因-点击[直接关闭]',
          matches: '[text="关闭该广告的原因"] +(2) [text="直接关闭"]',
          snapshotUrls: ['https://i.gkd.li/import/12663984'],
        },
        // 情况2 - 关闭该广告
        {
          preKeys: 0,
          key: 3,
          name: '广告反馈-点击[关闭该广告]',
          matches: 'TextView[text^="关闭"][text$="广告"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/12907642',
            'https://i.gkd.li/import/13926578',
          ],
        },
      ],
    },
    {
      // Key1,2,3,4,11 均为授权类的规则
      enable: false,
      key: 1,
      name: '功能类-电脑微信快捷自动登录',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'activity',
      activityIds: [
        '.plugin.webwx.ui.ExtDeviceWXLoginUI',
        'com.tencent.mm.ui.LauncherUI',
      ],
      rules: 'TextView[text="取消登录"] - Button[text="登录"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13522625', // activityIds: 'com.tencent.mm.plugin.webwx.ui.ExtDeviceWXLoginUI'
        'https://i.gkd.li/import/13522577', // activityIds: 'com.tencent.mm.ui.LauncherUI'
      ],
    },
    {
      enable: false,
      key: 2,
      name: '功能类-浏览器扫码微信登录自动授权',
      desc: '自动允许使用头像昵称等',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'activity',
      activityIds: [
        'com.tencent.mm.plugin.webview.ui.tools.SDKOAuthUI',
        'com.tencent.mm.ui.LauncherUI',
      ],
      rules: 'Button[text="拒绝"] - Button[text="允许"]',
      snapshotUrls: 'https://i.gkd.li/import/13065462', //com.tencent.mm.ui.LauncherUI
    },
    {
      enable: false,
      key: 3,
      name: '功能类-第三方APP申请使用授权弹窗',
      desc: '自动点击允许,但由于此界面可以额外新建昵称头像,默认不启用',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'activity',
      activityIds: ['com.tencent.mm.plugin.base.stub.UIEntryStub'],
      rules: 'Button[text="拒绝"] - Button[text="允许"]',
      snapshotUrls: 'https://i.gkd.li/import/12663602',
    },
    {
      enable: false,
      key: 5,
      name: '功能类-微信红包自动领取',
      desc: '自动领取私聊红包,群聊红包',
      exampleUrls:
        'https://github.com/gkd-kit/subscription/assets/38517192/32cfda78-b2e1-456c-8d85-bfb2bc4683aa',
      rules: [
        {
          name: '从红包结算界面返回',
          preKeys: [1, 2],
          activityIds:
            'com.tencent.mm.plugin.luckymoney.ui.LuckyMoneyBeforeDetailUI',
          matches: 'ImageView[desc="返回"]',
          snapshotUrls: 'https://i.gkd.li/import/12567696',
        },
        {
          key: 1,
          name: '点击红包-开',
          activityIds:
            'com.tencent.mm.plugin.luckymoney.ui.LuckyMoneyNotHookReceiveUI',
          // Button[desc="开"] 会在出现金币动画时会消失
          matches: 'ImageButton[desc="开"] + Button[desc="开"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12567697',
            'https://i.gkd.li/import/12567698', // 额外增加,金币动画的快照,规则不在这个快照上运行
          ],
        },
        {
          key: 2,
          name: '点击别人发的红包',
          activityIds: 'com.tencent.mm.ui.LauncherUI',
          // 第一个 LinearLayout[childCount=1] 区分是自己发的红包还是别人发的
          // 第二个 LinearLayout[childCount=1] 区分这个红包是否被领取过
          matches:
            'LinearLayout[childCount=1] >5 LinearLayout[childCount=1] - ImageView < LinearLayout + View + RelativeLayout > TextView[text="微信红包"][id!=null]',
          snapshotUrls: 'https://i.gkd.li/import/12567637',
        },
      ],
    },
    {
      enable: false,
      key: 7,
      name: '功能类-自动选中发送原图',
      desc: '图片和视频选择器-自动选中底部中间的发送原图',
      quickFind: true,
      activityIds: [
        'com.tencent.mm.plugin.gallery.ui.AlbumPreviewUI',
        'com.tencent.mm.plugin.gallery.ui.ImagePreviewUI',
      ],
      rules: [
        {
          key: 1,
          matches: '@ImageButton[desc="未选中,原图,复选框"] + [text="原图"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12686641', // 未选中
            'https://i.gkd.li/import/12840865', // 未选中
            'https://i.gkd.li/import/12686640', // 已选中
          ],
        },
      ],
    },
    {
      enable: false,
      key: 9,
      name: '功能类-自动查看原图',
      desc: '自动点击底部左侧[查看原图（*M）]按钮',
      quickFind: true,
      activityIds: 'com.tencent.mm.ui.chatting.gallery.ImageGalleryUI',
      rules: 'Button[text^="查看原图"][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/import/13523031',
      exampleUrls:
        'https://m.gkd.li/110102406/c6c75b8d-28a7-4da4-8ee7-4a27bfa3e6d2',
    },
    {
      key: 10,
      name: '全屏广告-微信小程序-开屏广告',
      quickFind: true,
      matchTime: 10000,
      // actionMaximum: 1, // 经常需要点2次，首次点击过早大概率跳不过
      // resetMatch: 'activity',
      activityIds: [
        'com.tencent.mm.plugin.appbrand.ui.AppBrandUI',
        'com.tencent.mm.plugin.appbrand.launching.AppBrandLaunchProxyUI',
      ],
      rules: [
        {
          matchDelay: 350, // 过早点击首次大概率跳不过
          matches: [
            'FrameLayout > TextView + FrameLayout > TextView[text="广告"]',
            'FrameLayout > TextView + FrameLayout > TextView[text="跳过"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/12701979',
            'https://i.gkd.li/import/12777076',
            'https://i.gkd.li/import/12785012',
            'https://i.gkd.li/import/12785183',
            'https://i.gkd.li/import/13306883',
            'https://i.gkd.li/import/12785246',
            'https://i.gkd.li/import/13407275',
          ],
        },
      ],
    },
    {
      enable: false,
      key: 11,
      name: '功能类-网页版文件传输助手扫码自动授权',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'activity',
      activityIds: 'com.tencent.mm.ui.LauncherUI',
      rules: '[text="打开网页版文件传输助手"] + * > Button[text="打开"]',
      snapshotUrls: 'https://i.gkd.li/import/12793745',
      exampleUrls:
        'https://m.gkd.li/110102406/a9580dcc-f1f6-4ced-822d-543912bee9f2',
    },
    {
      enable: false,
      key: 12,
      name: '分段广告-朋友圈广告[英文]',
      desc: '点击广告卡片右上角[Sponsored],直接关闭/出现菜单点击[Close the ad],确认关闭',
      activityIds: 'com.tencent.mm.plugin.sns.ui.SnsTimeLineUI',
      quickFind: true,
      rules: [
        {
          key: 0,
          name: '点击广告卡片右上角[Sponsored]',
          matches:
            'ImageView - TextView[text="Sponsored"][clickable=true][id!=null]',
          snapshotUrls: 'https://i.gkd.li/import/12905837',
        },
        // 以下是[确认关闭按钮]出现的情况
        // 情况1 - 你觉得这条广告怎么样->直接关闭
        {
          preKeys: 0,
          key: 1,
          name: 'Sponsored story-点击[Close the ad]',
          matches:
            '@LinearLayout[clickable=true][childCount=2] > TextView[text="Close the ad"]',
          snapshotUrls: 'https://i.gkd.li/import/12905838',
        },
        {
          preKeys: 1,
          key: 2,
          name: 'Reason for closing the ad - 点击[Close]',
          matches: '[text="Reason for closing the ad"] +(2) [text="Close"]',
          snapshotUrls: 'https://i.gkd.li/import/12905846',
        },
      ],
    },
    {
      enable: false,
      key: 13,
      name: '全屏广告-提瓦特助手小程序-弹窗广告',
      activityIds: 'com.tencent.mm.plugin.appbrand.ui.AppBrandUI',
      rules: [
        {
          key: 0,
          matches: [
            'RelativeLayout[childCount=1][clickable=true] > [text="提瓦特小助手"]',
            'FrameLayout[childCount=5] + FrameLayout[childCount=2] >2 FrameLayout[childCount=1]',
          ],
          snapshotUrls: 'https://i.gkd.li/import/12926021',
          exampleUrls:
            'https://m.gkd.li/110102406/15ae2d38-7662-40b9-84ce-504a6adec888',
        },
        {
          key: 1,
          matches: [
            'FrameLayout > FrameLayout > FrameLayout > TextView[text="广告"]',
            'FrameLayout[childCount=6] + FrameLayout[childCount=2] > FrameLayout > FrameLayout > ImageView',
          ],
          snapshotUrls: 'https://i.gkd.li/import/13459614',
          exampleUrls:
            'https://m.gkd.li/110102406/b2358b46-8db7-409f-94b2-7a6005a26a06',
        },
      ],
    },
    {
      enable: false,
      key: 14,
      name: '分段广告-小程序-内部广告',
      activityIds: ['com.tencent.mm.plugin.appbrand.ui.AppBrandUI'],
      quickFind: true,
      rules: [
        {
          key: 0,
          name: '【广告】0',
          matches:
            'FrameLayout[childCount=3] >n FrameLayout > FrameLayout > [text="广告"][visibleToUser=true]',
          excludeMatches:
            'FrameLayout > TextView + FrameLayout > TextView[text="跳过"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13199282', // [childCount=3]避免在点击展开菜单后重复点击
            'https://i.gkd.li/import/13407275', // excludeMatches中添加key10中规则，避免误触
          ],
          exampleUrls: [
            'https://m.gkd.li/110102406/ecf0a584-c5cc-4fe6-9999-a0dd4cf184d2',
            'https://m.gkd.li/110102406/e0da6477-6232-4df4-a3a2-bd1baf80999f',
          ],
        },
        {
          key: 1,
          name: '【广告】1',
          matches: 'Image[text="feedback_icon"] - [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/13378208',
          exampleUrls:
            'https://m.gkd.li/110102406/bc977f0e-5544-4fb0-aedd-81d1eb07560b',
        },
        {
          preKeys: [0, 1],
          key: 11,
          name: '点击原因【不感兴趣】',
          matches: '[text="不感兴趣"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/import/13200044',
          exampleUrls:
            'https://m.gkd.li/110102406/60805d2a-629f-4e91-a709-a06dc94917b1',
        },
        {
          preKeys: 11,
          key: 12,
          name: '点击原因【与我无关】',
          matches: '[text="与我无关"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/import/13200048',
          exampleUrls:
            'https://m.gkd.li/110102406/e8003aa4-851a-424e-ae60-4883d22e2d7b',
        },
      ],
    },
    {
      enable: false,
      key: 16,
      name: '全屏广告-小程序-京东购物',
      desc: '低价包邮广告',
      actionDelay: 500,
      actionMaximum: 1,
      activityIds: 'com.tencent.mm.plugin.appbrand.ui.AppBrandUI',
      rules: {
        matches: '@Image -n * > View[text="可横向滚动"]',
        action: 'clickCenter',
        snapshotUrls: ['https://i.gkd.li/import/13298294'],
        exampleUrls:
          'https://m.gkd.li/110102406/fe2393cc-8118-4ff1-9350-39ab5f815d29',
      },
    },
    {
      key: 17,
      name: '青少年模式',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: [
        'com.tencent.mm.plugin.finder.ui.FinderSelfUI',
        'com.tencent.mm.plugin.finder.ui.FinderHomeAffinityUI',
      ],
      rules:
        'TextView[text^="为呵护未成年人健康成长，微信推出青少年模式"] +2 Button[text="我知道了"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13538145',
        'https://i.gkd.li/import/13575195', //activityIds: 'com.tencent.mm.plugin.finder.ui.FinderHomeAffinityUI'
      ],
      exampleUrls: [
        'https://m.gkd.li/110102406/cfad313d-00b6-4f2d-9e38-f787a2c63fad',
      ],
    },
    {
      key: 18,
      name: '功能类-青少年模式自动点击验证密码',
      desc: '点击“验证密码”以申请临时访问',
      actionMaximum: 1,
      resetMatch: 'activity',
      matchTime: 10000,
      rules: [
        {
          key: 0,
          activityIds:
            'com.tencent.mm.plugin.teenmode.ui.AuthorizationRequestUI',
          matches: '@LinearLayout[childCount=2] > [text="验证密码"]',
          snapshotUrls: 'https://i.gkd.li/import/13588338',
        },
        {
          key: 1,
          activityIds: 'com.tencent.mm.plugin.webview.ui.tools.MMWebViewUI',
          matches: ['View[text="申请今天临时访问"]', 'View[desc="验证密码"]'],
          snapshotUrls: 'https://i.gkd.li/import/13631987',
        },
      ],
    },
    {
      key: 19,
      name: '功能类-订阅号-展开更早的消息',
      rules: [
        {
          key: 0,
          name: '8.0.44以下',
          quickFind: true,
          activityIds:
            'com.tencent.mm.plugin.brandservice.ui.timeline.BizTimeLineUI',
          matches: '[text="展开更早的消息"] < [id="com.tencent.mm:id/aqc"]',
          action: 'clickNode',
          matchDelay: 500,
          snapshotUrls: 'https://i.gkd.li/import/13790550',
          exampleUrls:
            'https://m.gkd.li/110102406/17a9fdcd-0e38-4fd2-b11b-7f1974aabd30',
        },
        {
          key: 1,
          name: '8.0.44',
          quickFind: true,
          matches: '[desc="展开更早的消息"]',
          action: 'clickNode',
          matchDelay: 500,
          snapshotUrls: 'https://i.gkd.li/import/13790949',
          exampleUrls:
            'https://m.gkd.li/110102406/01b01a88-8de2-4835-b1bf-1c2b3a89fa4c',
        },
      ],
    },
    {
      key: 20,
      name: '分段广告-朋友圈广告[繁体]',
      desc: '点击广告卡片右上角[廣告],出现菜单点击[關閉此廣告],确认关闭',
      activityIds: 'com.tencent.mm.plugin.sns.ui.SnsTimeLineUI',
      quickFind: true,
      rules: [
        {
          key: 0,
          name: '点击广告卡片右上角[廣告]',
          matches:
            'ImageView - TextView[text="廣告"][clickable=true][id!=null]',
          snapshotUrls: 'https://i.gkd.li/import/13791200',
          exampleUrls:
            'https://m.gkd.li/110102406/bba41f09-b71b-4c73-b72c-ff03c1cc9a57',
        },
        {
          preKeys: 0,
          key: 1,
          name: '点击[關閉此廣告]',
          matches: 'RelativeLayout[childCount=6] > TextView[text="關閉此廣告"]',
          snapshotUrls: 'https://i.gkd.li/import/13791202',
          exampleUrls:
            'https://m.gkd.li/110102406/58cd23af-cbb4-4e42-82d3-745cd344f273',
        },
      ],
    },
    {
      key: 21,
      name: '分段广告-订阅号文章内广告',
      desc: '',
      activityIds:
        'com.tencent.mm.plugin.brandservice.ui.timeline.preload.ui.TmplWebViewMMUI',
      rules: [
        {
          key: 1,
          name: '点击广告按钮',
          matches: [
            '@View[id="feedbackTagContainer"] >n TextView[text="广告"]',
          ],
          action: 'clickNode',
          exampleUrls:
            'https://m.gkd.li/110102406/216d438d-b250-4d9f-b5d7-001a29fbcb2f',
          snapshotUrls: 'https://i.gkd.li/import/14472922',
        },
        {
          key: 2,
          preKeys: 1,
          name: '点击不感兴趣',
          matches: 'TextView[text="不感兴趣"]',
          action: 'clickNode',
          exampleUrls:
            'https://m.gkd.li/110102406/92798f2b-d705-4bef-bad1-683563664f52',
          snapshotUrls: 'https://i.gkd.li/import/14472928',
        },
        {
          key: 3,
          preKeys: [1, 2],
          name: '点击与我无关',
          matches: 'TextView[text="与我无关"]',
          action: 'clickNode',
          exampleUrls:
            'https://m.gkd.li/110102406/774e0a30-ab5d-46bc-8322-1b15e01887c3',
          snapshotUrls: 'https://i.gkd.li/import/14472965',
        },
      ],
    },
    {
      key: 22,
      name: '功能类-语音转文字',
      desc: '仅未听过的语音可以转，仅测试私聊，未测试群聊',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.tencent.mm.ui.LauncherUI',
          matches: 'TextView[text="转文字"][id="com.tencent.mm:id/blu"]',
        },
      ],
    },
    {
      key: 23,
      name: '功能类-开水一条龙',
      desc: '广州大学城智慧热水小程序',
      activityIds: 'com.tencent.mm.plugin.appbrand.ui.AppBrandUI00',
      rules: [
        {
          key: 1,
          action: 'clickNode',
          name: '洗浴',
          actionDelay: 550,
          matchTime: 10000,
          matches: 'Image + @TextView[text="洗 浴"] + TextView[text="Bath"]',
          exampleUrls:
            'https://m.gkd.li/110102406/cc3499ec-3b43-423c-aae5-358a07531c69',
          snapshotUrls: 'https://i.gkd.li/import/14693454',
        },
        {
          key: 2,
          name: '已关阀',
          quickFind: true,
          action: 'clickNode',
          matchDelay: 500,
          matches: '@Button[text="已关阀"] + ImageView + Button[text="未关阀"]',
          exampleUrls:
            'https://m.gkd.li/110102406/03aa7521-c7d8-4a19-b55f-2560b7b40990',
          snapshotUrls: 'https://i.gkd.li/import/14693460',
        },
        {
          preKeys: [1],
          key: 3,
          name: '开启用水',
          action: 'clickNode',
          matches: 'TextView[text="开启用水"]',
          actionMaximum: 1,
          exampleUrls:
            'https://m.gkd.li/110102406/03aa7521-c7d8-4a19-b55f-2560b7b40990',
          snapshotUrls: 'https://i.gkd.li/import/14693460',
        },
      ],
    },
    {
      key: 24,
      name: '功能类-查看原视频',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.tencent.mm.ui.chatting.gallery.ImageGalleryUI',
          matches: 'Button[text^="查看原视频"]',
          exampleUrls:
            'https://m.gkd.li/110102406/5c0ce129-0d48-462e-8ab4-a08a85addb65',
          snapshotUrls: 'https://i.gkd.li/i/14956252',
        },
      ],
    },
  ],
});
