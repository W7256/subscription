import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.hupu.shihuo',
  name: '识货',
  groups: [
    {
      key: 2,
      name: '通知提示-请求消息通知',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      activityIds: 'com.shizhi.shihuoapp.module.main.ui.main.MainActivity',
      rules: {
        matches: [
          '[text^="通知分类"] +n ImageView[id="com.hupu.shihuo:id/ivClose"]',
          'TextView[text^="通知分类"] - * < ViewGroup + ImageView[id="com.hupu.shihuo:id/bottom_close"]',
        ],
        action: 'clickNode',
      },
      snapshotUrls: 'https://i.gkd.li/import/13704887',
      exampleUrls:
        'https://m.gkd.li/110102406/4b760cdc-ee0d-48b1-b4c7-f6cb2862e925',
    },
    {
      key: 3,
      name: '广告弹窗',
      desc: '点击左上角x关闭',
      activityIds:
        'com.shizhuang.duapp.modules.rn.mini.MiniReactActivity$MiniUITranslucentReactActivity',
      rules:
        '[id="com.hupu.shihuo:id/fragment_container"] >11 @ViewGroup[clickable=true] > ImageView',
      snapshotUrls: 'https://i.gkd.li/import/13115664',
    },
  ],
});
