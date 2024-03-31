import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'bin.mt.plus',
  name: 'MT管理器',
  groups: [
    {
      key: 1,
      name: '更新提示',
      activityIds: 'bin.mt.plus.Main',
      rules: '@[text="取消"] + [text="更新"]',
      snapshotUrls: 'https://i.gkd.li/import/12908784',
      exampleUrls:
        'https://m.gkd.li/110102406/fb172e0c-7737-4f2f-bb0a-e500ceddacac',
    },
  ],
});
