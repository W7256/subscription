import { toPairsIn } from 'lodash';
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
          matchTime: 8000,

          matches:
            'TextView[name="android.widget.TextView"] - [name="android.view.View"][clickable=true]',
          activityIds: [
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T',
            'com.uusense.uuspeed.ui.activity.SplashActivity',
          ],
          exampleUrls:
            'https://m.gkd.li/110102406/571f9e6e-0474-4073-bc47-09a56313f23e',
          snapshotUrls: 'https://i.gkd.li/import/14686789',
        },
      ],
    },
  ],
});
