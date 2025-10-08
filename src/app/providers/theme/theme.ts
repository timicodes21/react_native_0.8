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
  | 'primaryButtonText'
  | 'inverse'
  | 'placeholder'
  | 'inputText'
  | 'inputBorder'
  | 'primaryBtnDisabled'
  | 'complementary'
  | 'progressThumbnail'
  | 'screenBG'
  | 'highLightColor'
  | 'border'
  | 'backdrop'
  | 'loader'
  | 'darkGray'
  | 'toastBg';

// --- Shared Design Tokens ---
const baseTypography: AppTheme['typography'] = {
  fontFamily: {
    regular: 'OpenSans-Regular',
    bold: 'OpenSans-Bold',
  },
  sizes: {
    small: 12,
    'extra-small': 10,
    regular: 14,
    medium: 18,
    large: 25,
    'extra-large': 30,
    massive: 40,
  },
  lineHeights: { small: 16, regular: 22, large: 28 },
};

const baseSpacing = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
};

const baseRadius = { sm: 4, md: 8, lg: 16, full: 999 };

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
    secondary: '#84739D',
    screenBG: '#FFFFFF',
    background: '#FFFFFF',
    primary: '#7F3DFF',
    primaryText: '#7F3DFF',
    primaryButtonText: '#FFFFFF',
    error: '#F8000F',
    grayButton: '#E8EDF5',
    inputBg: '#FFFFFF',
    toastBg: '#FFFFFF',
    grayText: '#828282',
    inverse: '#374151',
    placeholder: '#9CA3AF',
    inputText: '#374151',
    primaryBtnDisabled: 'rgba(255, 69, 0, 0.5)',
    complementary: `#2E76AF`,
    progressThumbnail: '#474747',
    highLightColor: 'rgba(255,255,255,0.05)',
    border: 'rgba(0,0,0,0.6)',
    inputBorder: '#9CA3AF',
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
    secondary: '#9CA3AF',
    screenBG: '#212731',
    background: '#212731',
    primary: '#7F3DFF',
    primaryText: '#B58FFF',
    primaryButtonText: '#FFFFFF',
    error: '#F8000F',
    grayButton: '#E8EDF5',
    inputBg: '#181D25',
    toastBg: '#212731',
    grayText: '#828282',
    inverse: '#FFFFFF',
    placeholder: '#9CA3AF',
    inputText: '#F5F5F5',
    primaryBtnDisabled: 'rgba(255, 69, 0, 0.5)',
    complementary: `#2E76AF`,
    progressThumbnail: '#474747',
    highLightColor: 'rgba(255,255,255,0.05)',
    border: '#333333',
    inputBorder: '#181D25',
    backdrop: 'rgba(0,0,0,0.6)',
    loader: '#E0E0E0',
    darkGray: '#999999',
  },
  typography: baseTypography,
  spacing: baseSpacing,
  radius: baseRadius,
  shadows: baseShadows,
};
