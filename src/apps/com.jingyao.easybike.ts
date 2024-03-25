import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jingyao.easybike',
  name: '哈啰',
  groups: [
    // 预留 key 0-8
    {
      enable: false,
      key: 8,
      name: '权限提示-请求通知权限',
      desc: '点击取消',
      quickFind: true,
      activityIds: [
        'com.yanzhenjie.permission.PermissionActivity',
        'com.hellobike.atlas.business.portal.PortalActivity',
      ],
      rules: '[text*="开启通知"] < FrameLayout + FrameLayout >2 [text="取消"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13228735',
        'https://i.gkd.li/import/13402675', // activityIds: com.hellobike.atlas.business.portal.PortalActivity
      ],
    },
    {
      enable: false,
      key: 9,
      name: '定位提示-请求开启定位',
      desc: '点击取消',
      quickFind: true,
      activityIds: 'com.hellobike.atlas.business.portal.PortalActivity',
      rules:
        '[text="系统定位服务已关闭"] < FrameLayout +n FrameLayout >2 [text="取消"]',
      snapshotUrls: 'https://i.gkd.li/import/13228677',
    },
    {
      key: 10,
      name: '应用内活动、广告弹窗（大部分）',
      activityIds: [
        'com.hellobike.ads.widget.insert.dialog.HBAdvertDialog',
        'com.hellobike.atlas.business.portal.PortalActivity',
      ],
      rules:
        'FrameLayout[id="com.jingyao.easybike:id/hbDialogLayout"] + ImageView[id="com.jingyao.easybike:id/actionDialogClose"][clickable=true]',
      snapshotUrls: [
        'https://i.gkd.li/import/12650028', // 哈啰出行保弹窗
        'https://i.gkd.li/import/12650090', // 账单查看弹窗
        'https://i.gkd.li/import/13331231', // 骑行卡 atlas.business.portal.PortalActivity
      ],
    },
    {
      key: 11,
      name: '广告弹窗-哈啰智能电动车',
      quickFind: true,
      activityIds: [
        'com.hellobike.evehicle.business.main.EVehicleHomeManagerActivity',
      ],
      rules:
        '[id="com.jingyao.easybike:id/lottie_view"] < ViewGroup + [id="com.jingyao.easybike:id/btn_close"]',
      snapshotUrls: ['https://i.gkd.li/import/12650163'],
    },
    {
      key: 12,
      name: '局部广告-右侧悬浮广告',
      quickFind: true,
      activityIds: ['com.hellobike.atlas.business.portal.PortalActivity'],
      rules:
        '@[id="com.jingyao.easybike:id/closeFloatArea"] + [id="com.jingyao.easybike:id/floatADContainer"]',
      snapshotUrls: ['https://i.gkd.li/import/12650071'],
    },
    {
      key: 13,
      name: '广告弹窗-骑行订单完成时的广告',
      forcedTime: 5000,
      activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
      rules:
        '[text="订单完成"] >(2) View[childCount=2] > Image[id=null][clickable=true]',
      snapshotUrls: ['https://i.gkd.li/import/12684673'],
    },
    {
      key: 14,
      name: '广告弹窗-骑行卡-优惠券弹窗',
      activityIds: ['com.hellobike.atlas.business.portal.PortalActivity'],
      rules: '[desc="去使用"] + Button[text=null][visibleToUser=true]',
      snapshotUrls: ['https://i.gkd.li/import/12739316'],
    },
    {
      key: 15,
      quickFind: true,
      name: '功能类-新人教学弹窗',
      desc: '点击跳过',
      activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
      rules:
        '@View[text="跳过"] <2 View <2 View <<n FrameLayout[id="com.jingyao.easybike:id/h5_pc_container"]',
      snapshotUrls: ['https://i.gkd.li/import/13837543'],
    },
    {
      key: 16,
      name: '权限提示-请求定位权限',
      desc: '点击稍后再说',
      rules: [
        {
          action: 'clickNode',
          quickFind: true,
          activityIds: 'com.hellobike.atlas.business.portal.PortalActivity',
          matches:
            '@Button[text="稍后再说"][id="android:id/button2"] + Button[id="android:id/button1"][text="去授权"]',
          exampleUrls:
            'https://m.gkd.li/110102406/638fc723-a636-463f-b4c7-a5aa7bb4c8b2',
          snapshotUrls: 'https://i.gkd.li/import/14443144',
        },
      ],
    },
    {
      key: 17,
      name: '功能类-单车扫码后自动确认开锁',
      activityIds:
        'com.hellobike.flutter.platform.android.flutterboost.FlutterHostFragmentActivity',
      rules: [
        {
          action: 'clickNode',
          matchDelay: 500,
          matches: 'View[desc="确认开锁"]',
          exampleUrls:
            'https://m.gkd.li/110102406/28ffc3a5-fda0-4a63-bcdd-211385a770ad',
          snapshotUrls: 'https://i.gkd.li/import/14686624',
        },
      ],
    },
    {
      key: 18,
      name: '功能类-故障问卷点\'没故障\'',
      rules: [
        {
          action: 'clickNode',
          matchDelay: 500,
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches: 'View[text="没故障"]',
          exampleUrls:
            'https://m.gkd.li/110102406/a1eb39ef-9b7b-4d83-9e25-acec10a26350',
          snapshotUrls: 'https://i.gkd.li/import/14686676',
        },
      ],
    },
    {
      key: 19,
      name: '定位提示-点击去设置',
      rules: [
        {
          quickFind: true,
          action: 'clickNode',
          matchTime: 10000,
          activityIds: 'com.hellobike.atlas.business.portal.PortalActivity',
          matches: 'LinearLayout > Button[text="去设置"]',
          exampleUrls:
            'https://m.gkd.li/110102406/6a22bf39-7cd8-43fe-b82b-1fc50d10994d',
          snapshotUrls: 'https://i.gkd.li/import/14694377',
        },
      ],
    },
    {
      key: 20,
      name: '功能类-骑行后一键收碳',
      rules: [
        {
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches: '[text="一键收碳"]',
          forcedTime: 5000,
          exampleUrls:
            'https://m.gkd.li/110102406/cb270491-1f48-48cc-9408-0b0cbf14ffda',
          snapshotUrls: 'https://i.gkd.li/import/14694352',
        },
      ],
    },
    {
      key: 21,
      name: '功能类-继续还车',
      desc: '共享单车已在停车点但定位不准无法还车，自动点击继续还车',
      rules: [
        {
          key: 1,
          activityIds:
            'com.hellobike.flutter.platform.android.flutterboost.FlutterHostFragmentActivity',
          matches: 'View[desc="继续还车"]',
          action: 'clickNode',
          forcedTime: 5000,
          actionMaximum: 3,
          resetMatch: 'app',
          exampleUrls:
            'https://m.gkd.li/110102406/e77644a9-1eab-4352-b9ab-18a308ae8e4f',
          snapshotUrls: 'https://i.gkd.li/import/14734726',
        },
      ],
    },
  ],
});
