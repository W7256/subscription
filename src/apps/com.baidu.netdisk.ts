import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.baidu.netdisk',
  name: '百度网盘',
  deprecatedKeys: [0],
  groups: [
    {
      key: 1,
      name: '活动弹窗',
      desc: '关闭各种活动弹窗信息',
      quickFind: true,
      rules: [
        {
          key: 1,
          name: '一刻相册推广弹窗',
          activityIds: 'com.baidu.netdisk.ui.MainActivity',
          matches:
            '[id="com.baidu.netdisk:id/cl_content"] - [id="com.baidu.netdisk:id/iv_close"]',
          snapshotUrls: ['https://i.gkd.li/import/12642505'],
          exampleUrls:
            'https://m.gkd.li/110102406/b3b6e31e-65a9-4e8f-ba7a-e71c81c991b4',
        },
        {
          key: 2,
          name: 'VIP弹窗',
          activityIds: 'com.baidu.netdisk.business.guide.dialog.lifeproduct.', // LifeV10GuideDialog
          matches:
            '[id="com.baidu.netdisk:id/view_content_bg2"] - [id="com.baidu.netdisk:id/iv_close"]',
          snapshotUrls: ['https://i.gkd.li/import/12923937'],
          exampleUrls:
            'https://m.gkd.li/110102406/7a0c9a76-e000-4937-8cf8-8e5d495a3107',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-首页广告',
      activityIds: 'com.baidu.netdisk.ui.MainActivity',
      quickFind: true,
      rules: '[id="com.baidu.netdisk:id/banner_item_close"]',
      snapshotUrls: 'https://i.gkd.li/import/12706544',
      exampleUrls:
        'https://m.gkd.li/110102406/4116b682-391b-4c80-a208-0c44240462b7',
    },
    {
      key: 3,
      name: '局部广告-首页小飞机福利',
      activityIds: 'com.baidu.netdisk.ui.MainActivity',
      quickFind: true,
      rules:
        '[id="com.baidu.netdisk:id/vf_content"] + [id="com.baidu.netdisk:id/close"]',
      snapshotUrls: 'https://i.gkd.li/import/12706544',
      exampleUrls:
        'https://m.gkd.li/110102406/4116b682-391b-4c80-a208-0c44240462b7',
    },
    {
      key: 4,
      name: '局部广告-我的页面——专属福利',
      desc: '此规则已失效，等待修复',
      activityIds: 'com.baidu.netdisk.ui.MainActivity',
      quickFind: true,
      rules: '@TextView + [text="专属福利"]',
      snapshotUrls: 'https://i.gkd.li/import/12706549',
    },
    {
      key: 5,
      name: '广告弹窗-相册页面-激活无限空间',
      quickFind: true,
      activityIds:
        'com.baidu.netdisk.cloudimage.ui.album.AlbumGuideOneImageDialog',
      rules:
        '@ImageView[id="com.baidu.netdisk:id/close_btn"] + ImageView[id="com.baidu.netdisk:id/bg_image"]',
      snapshotUrls: 'https://i.gkd.li/import/12648987',
      exampleUrls:
        'https://m.gkd.li/110102406/5d65727d-822f-458a-b21d-8f185116ee4b',
    },
    {
      key: 6,
      name: '更新提示',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text="立即更新"] -n [text="下次再说"]', //使用ID会导致误触（例如删除确认https://i.gkd.li/import/13069049）
      snapshotUrls: 'https://i.gkd.li/import/12863984',
      exampleUrls:
        'https://m.gkd.li/110102406/00f33325-bd53-4526-8c6f-f6b81212011a',
    },
    {
      key: 7,
      name: '广告弹窗-续费横幅提示',
      desc: '',
      quickFind: true,
      activityIds: 'com.baidu.netdisk.ui.MainActivity',
      rules: [
        {
          matches: 'View[desc="续费"] + ImageView',
          snapshotUrls: 'https://i.gkd.li/import/12924036',
          exampleUrls:
            'https://m.gkd.li/110102406/eb1a64b7-de20-4f17-b57c-8a12eda995a4',
        },
      ],
    },
    {
      enable: false,
      key: 8,
      name: '通知提示-开启消息通知',
      desc: '点击关闭',
      quickFind: true,
      activityIds: 'com.baidu.netdisk.ui.MainActivity',
      rules: 'ImageView[id="com.baidu.netdisk:id/dialog_cancel"]', //单独使用ID会导致误触（例如删除确认https://i.gkd.li/import/13069049）
      snapshotUrls: ['https://i.gkd.li/import/12923936'],
      exampleUrls:
        'https://m.gkd.li/110102406/13ef17dc-6777-4932-9952-e066390cc8c5',
    },
    {
      enable: false,
      key: 10,
      name: '活动弹窗-看视频免费享极速下载',
      desc: '自动点击x按钮',
      quickFind: true,
      activityIds: 'com.baidu.netdisk.ui.MainActivity',
      rules:
        'ViewGroup > [id="com.baidu.netdisk:id/background_image"] +n [id="com.baidu.netdisk:id/iv_close"]',
      snapshotUrls: 'https://i.gkd.li/import/12783106',
      exampleUrls:
        'https://m.gkd.li/110102406/b1b6697b-716f-41c4-9d76-cae4543652fc',
    },
    {
      key: 11,
      quickFind: true,
      name: '活动弹窗-幸运券包',
      desc: '点击关闭',
      activityIds: 'com.baidu.netdisk.ui.MainActivity',
      rules: [
        {
          matches:
            '[id="com.baidu.netdisk:id/tv_title"][text^="恭喜获得"] -3 ImageView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/13806852',
          exampleUrls:
            'https://m.gkd.li/110102406/e754bbc1-4554-4606-8498-3ec953890903',
        },
      ],
    },
  ],
});
