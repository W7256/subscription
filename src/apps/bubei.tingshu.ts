import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'bubei.tingshu',
  name: '懒人听书',
  deprecatedKeys: [0],
  groups: [
    {
      key: 1,
      name: '局部广告-悬浮广告',
      rules: [
        {
          key: 0,
          name: '播放列表-右侧悬浮广告',
          quickFind: true,
          activityIds:
            'bubei.tingshu.listen.book.detail.activity.DetailActivity',
          matches: '[id="bubei.tingshu:id/closeIcon"][desc="关闭"]',
          snapshotUrls: 'https://i.gkd.li/import/13348489',
          exampleUrls:
            'https://m.gkd.li/110102406/a1955068-939d-4328-a87a-713e8bdf1b27',
        },
      ],
    },
    {
      key: 2,
      name: '更新提示',
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '[text="发现新版本"] +2 * > [text="暂不升级"]',
      snapshotUrls: 'https://i.gkd.li/import/13545953',
      exampleUrls:
        'https://m.gkd.li/110102406/2ee38a1a-4aca-46f8-91db-0dfcec3d96eb',
    },
  ],
});
