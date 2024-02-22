import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.uusense.speed',
  name: '测网速专家',
  groups: [
    {
      name: '开屏广告',
      key: 0,
      desc: '',
      rules: [
        {
          action: 'clickNode',
          matches: ['[name="android.view.View"]'],
          activityIds: [
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T',
          ],
        },
      ],
    },
  ],
});
