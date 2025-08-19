import {
  DefaultTheme,
  DarkTheme as RNDarkTheme,
} from '@react-navigation/native';

export type IThemeColor =
  | 'main'
  | 'secondary'
  | 'background'
  | 'primary'
  | 'primaryText'
  | 'error'
  | 'grayButton'
  | 'inputBg'
  | 'grayText'
  | 'inverse'
  | 'placeholder'
  | 'inputText'
  | 'primaryBtnDisabled'
  | 'complementary'
  | 'progressThumbnail'
  | 'screenBG'
  | 'highLightColor'
  | 'border'
  | 'backdrop'
  | 'loader'
  | 'darkGray';

export const DarkThemeColors: Record<IThemeColor, string> = {
  ...RNDarkTheme.colors,
  main: '#FFFFFF',

  secondary: '#A6A6A6',
  screenBG: '#11100F',
  background: '#1A1A1A',
  primary: '#FF4500',
  primaryText: '#4A739C',
  error: '#F8000F',
  grayButton: '#E8EDF5',
  inputBg: '#272828',
  grayText: '#828282',
  inverse: '#888888',
  placeholder: '#A3A3A3',
  inputText: '#F5F5F5',
  primaryBtnDisabled: 'rgba(255, 69, 0, 0.5)',
  complementary: `#2E76AF`,
  progressThumbnail: '#474747',
  highLightColor: 'rgba(255,255,255,0.05)',
  border: '#333333',
  backdrop: 'rgba(0,0,0,0.6)',
  loader: '#E0E0E0',
  darkGray: '#999999',
};

export const LightThemeColors: Record<IThemeColor, string> = {
  ...DefaultTheme.colors,
  main: '#FFFFFF',
  secondary: '#A6A6A6',
  screenBG: '#11100F',
  background: '#1A1A1A',
  primary: '#FF4500',
  primaryText: '#4A739C',
  error: '#F8000F',
  grayButton: '#E8EDF5',
  inputBg: '#272828',
  grayText: '#828282',
  inverse: '#888888',
  placeholder: '#A3A3A3',
  inputText: '#F5F5F5',
  primaryBtnDisabled: 'rgba(255, 69, 0, 0.5)',
  complementary: `#2E76AF`,
  progressThumbnail: '#474747',
  highLightColor: 'rgba(255,255,255,0.05)',
  border: 'rgba(0,0,0,0.6)',
  backdrop: '#333333',
  loader: '#E0E0E0',
  darkGray: '#999999',
};
