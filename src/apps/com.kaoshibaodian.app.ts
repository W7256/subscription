import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.kaoshibaodian.app',
  name: '考试宝',
  groups: [
    {
      key: 2,
      name: '局部广告-答题页面广告',
      desc: '',
      activityIds: 'ksbd.quiz.QuizActivity',
      rules: [
        {
          key: 1,
          name: '顶部广告',
          action: 'click',
          matches:
            'TextView[text="广告"] < FrameLayout - * < FrameLayout - FrameLayout[desc^="close-fill"] > View',
          exampleUrls:
            'https://m.gkd.li/110102406/e52be890-deed-431c-b444-e5a2bbbdb01c',
          snapshotUrls: 'https://i.gkd.li/import/14491656',
        },
        {
          key: 2,
          name: '底部开通会员广告',
          action: 'click',
          matches: 'ImageView[id="com.kaoshibaodian.app:id/close_iv"]',
          exampleUrls:
            'https://m.gkd.li/110102406/e52be890-deed-431c-b444-e5a2bbbdb01c',
          snapshotUrls: 'https://i.gkd.li/import/14491656',
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-题库详情页广告',
      desc: '',
      activityIds: 'ksbd.app.exercise.ExerciseAct',
      rules: [
        {
          key: 1,
          matches:
            'TextView[text^="应​用​名​称"] < LinearLayout - * < * - * < LinearLayout - FrameLayout > FrameLayout > ImageView',
          exampleUrls:
            'https://m.gkd.li/110102406/3d603f14-56fd-4a50-a120-19dc36d40955',
          snapshotUrls: 'https://i.gkd.li/import/14491632',
        },
      ],
    },
  ],
});
