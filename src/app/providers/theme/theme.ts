// theme.ts
import {
  DefaultTheme,
  DarkTheme as RNDarkTheme,
} from '@react-navigation/native';
import { AppTheme } from './interfaces';

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

// --- Shared Design Tokens ---
const baseTypography = {
  fontFamily: {
    regular: 'OpenSans-Regular',
    bold: 'OpenSans-Bold',
  },
  sizes: { small: 12, regular: 16, large: 20 },
  lineHeights: { small: 16, regular: 22, large: 28 },
};

const baseSpacing = (multiplier: number) => multiplier * 8;

const baseRadius = { sm: 4, md: 8, lg: 16 };

const baseShadows = {
  sm: '0 1px 2px rgba(0,0,0,0.05)',
  md: '0 4px 6px rgba(0,0,0,0.1)',
  lg: '0 10px 15px rgba(0,0,0,0.15)',
};

// --- Light Theme ---
export const LightTheme: AppTheme = {
  colors: {
    ...DefaultTheme.colors,
    main: '#374151',
    secondary: '#A6A6A6',
    screenBG: '#FFFFFF',
    background: '#FFFFFF',
    primary: '#7F3DFF',
    primaryText: '#7F3DFF',
    error: '#F8000F',
    grayButton: '#E8EDF5',
    inputBg: '#FFFFFF',
    grayText: '#828282',
    inverse: '#888888',
    placeholder: '#9CA3AF',
    inputText: '#374151',
    primaryBtnDisabled: 'rgba(255, 69, 0, 0.5)',
    complementary: `#2E76AF`,
    progressThumbnail: '#474747',
    highLightColor: 'rgba(255,255,255,0.05)',
    border: 'rgba(0,0,0,0.6)',
    backdrop: '#333333',
    loader: '#E0E0E0',
    darkGray: '#999999',
  },
  typography: baseTypography,
  spacing: baseSpacing,
  radius: baseRadius,
  shadows: baseShadows,
};

// --- Dark Theme ---
export const DarkTheme: AppTheme = {
  colors: {
    ...RNDarkTheme.colors,
    main: '#F5F5F5',
    secondary: '#A6A6A6',
    screenBG: '#212731',
    background: '#212731',
    primary: '#7F3DFF',
    primaryText: '#B58FFF',
    error: '#F8000F',
    grayButton: '#E8EDF5',
    inputBg: '#181D25',
    grayText: '#828282',
    inverse: '#888888',
    placeholder: '#9CA3AF',
    inputText: '#F5F5F5',
    primaryBtnDisabled: 'rgba(255, 69, 0, 0.5)',
    complementary: `#2E76AF`,
    progressThumbnail: '#474747',
    highLightColor: 'rgba(255,255,255,0.05)',
    border: '#333333',
    backdrop: 'rgba(0,0,0,0.6)',
    loader: '#E0E0E0',
    darkGray: '#999999',
  },
  typography: baseTypography,
  spacing: baseSpacing,
  radius: baseRadius,
  shadows: baseShadows,
};
