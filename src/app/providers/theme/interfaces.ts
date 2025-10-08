// interfaces.ts
import React, { ReactNode } from 'react';
import { IThemeColor } from './theme';
import { IFontSize } from '@/app/configs/typography.config';

// Available theme names
export type IThemeName = 'light' | 'dark';

// Extendable App Theme type
export interface AppTheme {
  colors: Record<IThemeColor, string>;
  typography: {
    fontFamily: {
      regular: string;
      bold: string;
    };
    sizes: Record<IFontSize, number>;
    lineHeights: {
      small: number;
      regular: number;
      large: number;
    };
  };
  spacing: {
    none: number;
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
  };
  radius: {
    sm: number;
    md: number;
    lg: number;
    full: number;
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
  };
}

// Context exposed via ThemeProvider
export interface IThemeContext {
  changeTheme: (name: IThemeName) => void;
  currentTheme: IThemeName;
  theme: AppTheme;
}

// Props for ThemeProvider
export type IThemeProviderProps = React.FC<{
  children?: ReactNode;
}>;

// Props for temporary loading UI
export interface IThemeSwitchWaitProps {
  spinnerColor?: string;
  backgroundColor: string;
  textColor: string;
}
