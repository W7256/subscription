import categories from './categories';
import globalGroups from './globalGroups';
import apps from './rawApps';
import type { RawSubscription } from './types';

const subsConfig: RawSubscription = {
  id: 0,
  version: 0,
  name: 'Wbx的GKD订阅',
  author: 'Wbx',
  supportUri: 'https://github.com/W7256/subscription',
  updateUrl: '',
  checkUpdateUrl: '',
  globalGroups,
  categories,
  apps,
};

export default subsConfig;
