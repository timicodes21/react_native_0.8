import { IThemeColor } from '@/app/providers/theme';
import { SvgProps } from 'react-native-svg';

export interface IIconProps extends SvgProps {
  height?: number;
  width?: number;
  color?: IThemeColor;
  active?: boolean;
}
