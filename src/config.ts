import categories from './categories';
import globalGroups from './globalGroups';
import apps from './rawApps';
import type { RawSubscription } from './types';

const subsConfig: RawSubscription = {
  id: 26,
  version: 186,
  name: 'wbx的GKD订阅',
  author: 'wbx',
  supportUri: 'https://github.com/W7256/subscription',
  updateUrl: 'https://registry.npmmirror.com/wbx_gkd_subscription/latest/files',
  checkUpdateUrl:
    'https://registry.npmmirror.com/wbx_gkd_subscription/latest/files',
  globalGroups,
  categories,
  apps,
};

export default subsConfig;
