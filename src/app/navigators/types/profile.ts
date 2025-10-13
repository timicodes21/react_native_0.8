import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';

export enum ProfileNavigationEnum {
  PROFILE = 'Profile',
}

export type ProfileStackParamsList = {
  [ProfileNavigationEnum.PROFILE]: undefined;
};

export type ProfileScreenNavigationProps<
  RouteName extends keyof ProfileStackParamsList,
> = React.FC<NativeStackScreenProps<ProfileStackParamsList, RouteName>>;
