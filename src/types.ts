import * as api from '@gkd-kit/api';
export type IArray<T> = T | T[];

export interface RawApp extends api.RawApp {
  /**
   * 某些规则组被移除不使用时, 为了避免 key 在后续被复用, 需要将已经删除的规则组的 key 填入此数组做校验使用
   */
  deprecatedKeys?: api.Integer[];
}

export interface RawAppGroup extends api.RawAppGroup {}
export interface RawAppRule extends api.RawAppRule {}
export interface RawAppRuleProps extends api.RawAppRuleProps {}
export interface RawCategory extends api.RawCategory {}
export interface RawCommonProps extends api.RawCommonProps {}
export interface RawGlobalApp extends api.RawGlobalApp {}
export interface RawGlobalRule extends api.RawGlobalRule {}
export interface RawGlobalRuleProps extends api.RawGlobalRuleProps {}
export interface RawSubscription extends api.RawSubscription {
  apps?: RawApp[]; //此处的Rawapp使用的是上面定义的，api里RawApp无deprecatedKeys,file.ts会报错
}

export const defineSubsConfig = (config: api.RawSubscription) => {
  return JSON.stringify(config, undefined, 2);
};

export const defineAppConfig = (config: RawApp) => {
  return config;
};
