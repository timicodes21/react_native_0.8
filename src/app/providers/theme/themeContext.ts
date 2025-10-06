import { AppTheme } from './interfaces';
// themeContext.ts
import { createContext, useContext } from 'react';
import { IThemeContext } from './interfaces';

export const ThemeContext = createContext<IThemeContext>({
  currentTheme: 'dark',
  changeTheme: () => {},
  theme: {} as AppTheme,
});

export const useAppTheme = () => useContext(ThemeContext);
