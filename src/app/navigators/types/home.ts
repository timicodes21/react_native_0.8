import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';

export enum HomeNavigationEnum {
  HOME = 'Home',
}

export type HomeStackParamsList = {
  [HomeNavigationEnum.HOME]: undefined;
};

export type HomeScreenNavigationProps<
  RouteName extends keyof HomeStackParamsList,
> = React.FC<NativeStackScreenProps<HomeStackParamsList, RouteName>>;
