import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';

export enum AuthNavigationEnum {
  LOGIN = 'Login',
  SIGN_UP = 'Signup',
  SPLASHSCREEN = 'Splashscreen',
  WELCOME_TOUR = 'WelcomeTour',
}

export type AuthStackParamsList = {
  [AuthNavigationEnum.LOGIN]: undefined;
  [AuthNavigationEnum.SIGN_UP]: undefined;
  [AuthNavigationEnum.SPLASHSCREEN]: undefined;
  [AuthNavigationEnum.WELCOME_TOUR]: undefined;
};

export type AuthScreenNavigationProps<
  RouteName extends keyof AuthStackParamsList,
> = React.FC<NativeStackScreenProps<AuthStackParamsList, RouteName>>;
