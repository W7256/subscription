import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.com.langeasy.LangEasyLexis',
  name: '不背单词',
  groups: [
    {
      enable: false,
      key: 1,
      name: '功能类-自动签到',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          activityIds: 'cn.com.langeasy.LangEasyLexis.activity.MainActivity',
          matches: '[id="cn.com.langeasy.LangEasyLexis:id/bb_checkin"]',
          snapshotUrls: 'https://i.gkd.li/import/13610321',
        },
      ],
    },
    {
      key: 2,
      enable: false,
      name: '活动弹窗-右下角弹窗',
      quickFind: true,
      matchTime: 10000,
      rules: [
        {
          activityIds: 'cn.com.langeasy.LangEasyLexis.activity.MainActivity',
          matches: '[id="cn.com.langeasy.LangEasyLexis:id/close_float_button"]',
          snapshotUrls: 'https://i.gkd.li/import/13759025',
        },
      ],
    },
    {
      name: '功能类-随身听一条龙',
      key: 3,
      desc: '打开不背app自动进入随身听界面',
      activityIds: [
        'cn.com.langeasy.LangEasyLexis.activity.MainActivity',
        'cn.com.langeasy.LangEasyLexis.activity.MyContentActivity',
        'cn.com.langeasy.LangEasyLexis.activity.AllLearnedWordsActivity',
      ],
      rules: [
        {
          key: 1,
          quickFind: true,
          matches: [
            'ImageView[id="cn.com.langeasy.LangEasyLexis:id/btn_my_content"]',
          ],
          actionMaximum: 1,
          matchDelay: 500,
          matchTime: 5000,
          resetMatch: 'app',
          action: 'clickNode',
          snapshotUrls: ['https://i.gkd.li/import/13807238'],
          exampleUrls: [
            'https://m.gkd.li/110102406/5a9a9b13-9edc-46ce-a0fd-3c077dd4bbfd',
          ],
        },
        {
          name: '全部已学',
          key: 2,
          preKeys: [1],
          action: 'clickNode',
          matches: [
            'LinearLayout[id="cn.com.langeasy.LangEasyLexis:id/cell_all_learn"]',
          ],
          quickFind: true,
          snapshotUrls: ['https://i.gkd.li/import/13807244'],
          exampleUrls: [
            'https://m.gkd.li/110102406/891cdc4f-c312-4e7b-8640-ef88b288da40',
          ],
        },
        {
          name: '随身听',
          key: 3,
          quickFind: true,
          action: 'clickNode',
          preKeys: [2],
          matches:
            'LinearLayout[id="cn.com.langeasy.LangEasyLexis:id/func_walkman"]',
          snapshotUrls: ['https://i.gkd.li/import/13807245'],
          exampleUrls: [
            'https://m.gkd.li/110102406/12a62bad-1b99-4a51-bef9-dfe242a351f0',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '广告弹窗',
      rules: [
        {
          key: 1,
          action: 'clickNode',
          quickFind: true,
          activityIds: 'cn.com.langeasy.LangEasyLexis.activity.MainActivity',
          matches: 'ImageView[id="cn.com.langeasy.LangEasyLexis:id/close_btn"]',
          exampleUrls:
            'https://m.gkd.li/110102406/2b91607e-b548-4c31-8b8f-118d66f60cdc',
          snapshotUrls: 'https://i.gkd.li/import/14717912',
        },
      ],
    },
  ],
});
