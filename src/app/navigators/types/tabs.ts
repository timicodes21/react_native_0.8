export enum TabNavigatorEnum {
  HOME = 'HomeTab',
  LIBRARY = 'LibraryTab',
  DOWNLOADS = 'DownloadsTab',
  PROFILE = 'ProfileTab',
}

export type TabNavigatorParamsList = {
  [TabNavigatorEnum.HOME]: undefined;
  [TabNavigatorEnum.LIBRARY]: undefined;
  [TabNavigatorEnum.DOWNLOADS]: undefined;
  [TabNavigatorEnum.PROFILE]: undefined;
};
