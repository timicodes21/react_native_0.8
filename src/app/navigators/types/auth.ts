import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';

export enum AuthNavigationEnum {
  LOGIN = 'Login',
  SIGN_UP = 'Signup',
  SPLASHSCREEN = 'Splashscreen',
  WELCOME_TOUR = 'WelcomeTour',
  CHOOSE_INTERESTS = 'ChooseInterests',
}

export type AuthStackParamsList = {
  [AuthNavigationEnum.LOGIN]: undefined;
  [AuthNavigationEnum.SIGN_UP]: undefined;
  [AuthNavigationEnum.SPLASHSCREEN]: undefined;
  [AuthNavigationEnum.WELCOME_TOUR]: undefined;
  [AuthNavigationEnum.CHOOSE_INTERESTS]: undefined;
};

export type AuthScreenNavigationProps<
  RouteName extends keyof AuthStackParamsList,
> = React.FC<NativeStackScreenProps<AuthStackParamsList, RouteName>>;
