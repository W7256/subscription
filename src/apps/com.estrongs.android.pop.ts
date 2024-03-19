import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.estrongs.android.pop',
  name: 'ES文件浏览器',
  groups: [
    {
      key: 0,
      name: '全屏广告',
      activityIds: [
        'com.fighter.loader.view.InteractTemplateAdDialog',
        'com.estrongs.android.pop.view.FileExplorerActivity',
      ],
      rules: [
        {
          matches:
            'RelativeLayout > ImageView[id="com.estrongs.android.pop:id/iv_close"]',
          action: 'clickNode',
          exampleUrls:
            'https://m.gkd.li/110102406/d95033e9-535c-44fe-a82a-7261aa4d17eb',
          snapshotUrls: 'https://i.gkd.li/import/14506992',
        },
        {
          matches:
            'TextView[text^="应用名称"] < LinearLayout - FrameLayout >(2-n) FrameLayout > ImageView',
          exampleUrls:
            'https://m.gkd.li/110102406/b79b4e3d-df86-423c-a020-7e3846e07907',
          snapshotUrls: 'https://i.gkd.li/import/14506950',
        },
      ],
    },
    {
      key: 1,
      name: '局部广告',
      activityIds: 'com.estrongs.android.pop.view.FileExplorerActivity',
      quickFind: true,
      rules: [
        {
          key: 0,
          matches:
            'ImageView - LinearLayout >(2) ImageView[id="com.estrongs.android.pop:id/close"][clickable=true]',
          snapshotUrls: ['https://i.gkd.li/import/12674919'],
        },
        {
          key: 1,
          matches:
            '@[id="com.estrongs.android.pop:id/close"] + [id="com.estrongs.android.pop:id/ad_flag_source"]',
          snapshotUrls: ['https://i.gkd.li/import/12818281'],
        },
        {
          key: 2,
          matches: '[vid="close_b_t_a_i_b_no_compliance"]',
          snapshotUrls: 'https://i.gkd.li/import/13842299',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-2',
      rules: [
        {
          key: 1,
          activityIds: '',
          matches:
            'TextView[text="查看详情"] < FrameLayout - * < FrameLayout -2 FrameLayout > ImageView',
          exampleUrls:
            'https://m.gkd.li/110102406/b85f2952-7bec-453b-859a-0d31bcd00c35',
          snapshotUrls: 'https://i.gkd.li/import/14548770',
        },
      ],
    },
  ],
});
