export enum RootNavigatorEnum {
  AUTH = 'auth',
  TABS = 'TabStack',
}

export type RootStackParamsList = {
  [RootNavigatorEnum.AUTH]: undefined;
  [RootNavigatorEnum.TABS]: undefined;
};
