// themeContext.ts
import { createContext, useContext } from 'react';
import { IThemeContext } from './interfaces';
import { DarkTheme } from './theme';

export const ThemeContext = createContext<IThemeContext>({
  currentTheme: 'dark',
  changeTheme: () => {},
  themeColors: DarkTheme.colors,
});

export const useAppTheme = () => useContext(ThemeContext);
