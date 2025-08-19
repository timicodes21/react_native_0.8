import { createContext, useContext } from 'react';
import { IThemeContext } from './interfaces';
import { DarkThemeColors } from './theme';

export const ThemeContext = createContext<IThemeContext>({
  currentTheme: 'dark',
  changeTheme: () => {},
  themeColors: DarkThemeColors,
});

export const useTheme = () => {
  return useContext(ThemeContext);
};
