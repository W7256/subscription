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
          exampleUrls:
            'https://m.gkd.li/110102406/e61248b2-bf69-4294-aabf-0ec04e5363e1',
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
          exampleUrls:
            'https://m.gkd.li/110102406/79f4b714-610d-48e3-82ed-6341fc84569d',
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
      key: 4,
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
    {
      key: 5,
      name: '功能类-开始拼写',
      activityIds: [
        'cn.com.langeasy.LangEasyLexis.activity.NewReviewActivity',
        'cn.com.langeasy.LangEasyLexis.activity.NewLearnActivity',
      ],
      rules: [
        {
          key: 1,
          quickFind: true,
          matches: 'TextView[text="开始拼写"]',
          action: 'clickNode',
          exampleUrls:
            'https://m.gkd.li/110102406/d8d672a5-444b-48ee-8041-b2c6eeb067d4',
          snapshotUrls: 'https://i.gkd.li/i/14755345',
        },
      ],
    },
    {
      key: 6,
      name: '功能类-点击输入框',
      desc: '开始拼写时点击一下输入框，方便回车到下一个单词（方便平板搭配键盘，懂得都懂）',
      activityIds: [
        'cn.com.langeasy.LangEasyLexis.activity.NewReviewActivity',
        'cn.com.langeasy.LangEasyLexis.activity.NewLearnActivity',
      ],
      rules: [
        {
          quickFind: true,
          actionMaximum: 1,
          resetMatch: 'activity',
          action: 'clickCenter',
          matches:
            'EditText[id="cn.com.langeasy.LangEasyLexis:id/et_spell_input"][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/110102406/09afebfd-7520-4ed2-ac49-165b9492138f',
          snapshotUrls: 'https://i.gkd.li/i/14755702',
        },
      ],
    },
    {
      key: 7,
      name: '广告弹窗-去商店评分',
      desc: '点击下次再说',
      rules: [
        {
          quickFind: true,
          matches: 'Button[id="android:id/button3"][text="下次再说"]',
          action: 'clickNode',
          exampleUrls:
            'https://m.gkd.li/110102406/3bbcaffe-7d42-414e-9ba7-dda8303fa171',
          snapshotUrls: 'https://i.gkd.li/i/14757351',
        },
      ],
    },
    {
      key: 8,
      name: '功能类-复习完自动点击\'Learn\'板块',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          quickFind: true,
          activityIds: 'cn.com.langeasy.LangEasyLexis.activity.MainActivity',
          matches:
            '@[id="cn.com.langeasy.LangEasyLexis:id/ll_learn_band"] + [id="cn.com.langeasy.LangEasyLexis:id/ll_review_band"] > [text="0"]',
          exampleUrls:
            'https://m.gkd.li/110102406/5d9dac38-f8cd-416d-8d44-1869b896974d',
          snapshotUrls: 'https://i.gkd.li/i/14785284',
        },
      ],
    },
  ],
});
