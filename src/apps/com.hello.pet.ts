import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.hello.pet',
  name: '街猫',
  groups: [
    {
      key: 1,
      name: '通知提示-请求开启通知弹窗',
      desc: '',
      rules: [
        {
          key: 1,
          action: 'clickNode',
          matchDelay: 500,
          quickFind: true,
          matches:
            'TextView[text="去开启"] - TextView[text="取消"][id="com.hello.pet:id/sign_out_tv"]',
          exampleUrls:
            'https://m.gkd.li/110102406/05d85533-269a-4b7d-9e81-feb65a5c4429',
          snapshotUrls: 'https://i.gkd.li/import/14434353',
        },
      ],
    },
  ],
});
