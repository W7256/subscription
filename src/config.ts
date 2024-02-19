import categories from './categories';
import globalGroups from './globalGroups';
import apps from './rawApps';
import type { RawSubscription } from './types';

const subsConfig: RawSubscription = {
  id: 26,
  version: 186,
  name: 'Wbx的GKD订阅',
  author: 'Wbx',
  supportUri: 'https://github.com/W7256/subscription',
  updateUrl:
    'https://cdn.gitmirror.com/gh/W7256/subscription/main/dist/gkd.json5',
  checkUpdateUrl:
    'https://cdn.gitmirror.com/gh/W7256/subscription/main/dist/gkd.version.json5',
  globalGroups,
  categories,
  apps,
};

export default subsConfig;
