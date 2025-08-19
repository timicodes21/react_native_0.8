import React, { ReactNode } from 'react';
import { IThemeColor } from './theme';

export type IThemeName = 'light' | 'dark';

export type CustomTheme = Record<IThemeColor, string>;

export interface IThemeContext {
  changeTheme: (name: IThemeName) => void;
  currentTheme: IThemeName;
  themeColors: CustomTheme;
}

export type IThemeProviderProps = React.FC<{
  children?: ReactNode;
}>;

export interface IThemeSwitchWaitProps {
  spinnerColor?: string;
  backgroundColor: string;
  textColor: string;
}
