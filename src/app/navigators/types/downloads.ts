import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';

export enum DownloadsNavigationEnum {
  DOWNLOADS = 'Downloads',
}

export type DownloadsStackParamsList = {
  [DownloadsNavigationEnum.DOWNLOADS]: undefined;
};

export type DownloadsScreenNavigationProps<
  RouteName extends keyof DownloadsStackParamsList,
> = React.FC<NativeStackScreenProps<DownloadsStackParamsList, RouteName>>;
