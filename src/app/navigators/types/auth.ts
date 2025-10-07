import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';

export enum AuthNavigationEnum {
  LOGIN = 'Login',
  SPLASHSCREEN = 'Splashscreen',
}

export type AuthStackParamsList = {
  [AuthNavigationEnum.LOGIN]: undefined;
  [AuthNavigationEnum.SPLASHSCREEN]: undefined;
};

export type AuthScreenNavigationProps<
  RouteName extends keyof AuthStackParamsList,
> = React.FC<NativeStackScreenProps<AuthStackParamsList, RouteName>>;
