import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';

export enum LibraryNavigationEnum {
  LIBRARY = 'Library',
}

export type LibraryStackParamsList = {
  [LibraryNavigationEnum.LIBRARY]: undefined;
};

export type LibraryScreenNavigationProps<
  RouteName extends keyof LibraryStackParamsList,
> = React.FC<NativeStackScreenProps<LibraryStackParamsList, RouteName>>;
