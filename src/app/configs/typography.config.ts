import { Platform } from 'react-native';
import { IThemeColor } from '../providers/theme/theme';

// Reuse these in Typography
export type IFontColor =
  | 'main'
  | 'primary'
  | 'secondary'
  | 'error'
  | 'inverse'
  | 'primaryButtonText';

export type IFontSize =
  | 'small'
  | 'extra-small'
  | 'regular'
  | 'normal'
  | 'medium'
  | 'large'
  | 'extra-large'
  | 'massive';
export type IFontWeight =
  | 'regular'
  | 'medium'
  | 'semi-bold'
  | 'bold'
  | 'extra-bold'
  | 'light'
  | 'black';
export type IFontFamily = 'opensans' | 'roboto' | 'proxima';
export type IVariant = 'h1' | 'h2' | 'h3' | 'body' | 'caption';

// ---- Config Maps ----
export const colorMap: Record<IFontColor, IThemeColor> = {
  main: 'main',
  inverse: 'inverse',
  primary: 'primary',
  secondary: 'secondary',
  error: 'error',
  primaryButtonText: 'primaryButtonText',
};

export const fontSizeMap: Record<IFontSize, number> = {
  small: 12,
  'extra-small': 10,
  regular: 14,
  normal: 16,
  medium: 18,
  large: 25,
  'extra-large': 30,
  massive: 40,
};

export const fontMap: Record<IFontFamily, Record<IFontWeight, string>> = {
  opensans: {
    regular: 'OpenSans-Regular',
    light: 'OpenSans-Light',
    'semi-bold': 'OpenSans-SemiBold',
    medium: 'OpenSans-Medium',
    bold: 'OpenSans-Bold',
    'extra-bold': 'OpenSans-Black',
    black: 'OpenSans-Black',
  },
  roboto: {
    regular: 'Roboto-Regular',
    light: 'Roboto-Light',
    'semi-bold': 'Roboto-SemiBold',
    medium: 'Roboto-Medium',
    bold: 'Roboto-Bold',
    'extra-bold': 'Roboto-Black',
    black: 'Roboto-Black',
  },
  proxima: {
    regular:
      Platform.OS === 'android' ? 'proximanova_regular' : 'ProximaNova-Regular',
    light:
      Platform.OS === 'android' ? 'proximanova_light' : 'ProximaNova-Light',
    'semi-bold':
      Platform.OS === 'android' ? 'proximanova_bold' : 'ProximaNova-Bold',
    medium:
      Platform.OS === 'android' ? 'proximanova_regular' : 'ProximaNova-Regular',
    bold: Platform.OS === 'android' ? 'proximanova_bold' : 'ProximaNova-Bold',
    'extra-bold':
      Platform.OS === 'android'
        ? 'proximanova_extrabold'
        : 'ProximaNova-ExtraBold',
    black:
      Platform.OS === 'android' ? 'proximanova_black' : 'ProximaNova-Black',
  },
};

export const variantMap: Record<
  IVariant,
  { size: IFontSize; weight: IFontWeight }
> = {
  h1: { size: 'massive', weight: 'bold' },
  h2: { size: 'extra-large', weight: 'bold' },
  h3: { size: 'large', weight: 'semi-bold' },
  body: { size: 'regular', weight: 'regular' },
  caption: { size: 'small', weight: 'light' },
};
