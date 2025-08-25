import React from 'react';
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';
import { IThemeColor } from '../../app/providers/theme/theme';
import { useTheme } from '../../app/providers/theme/themeContext';

type ISpinnerProps = React.FC<
  ActivityIndicatorProps & {
    color?: IThemeColor;
    size?: 'small' | 'large' | number;
  }
>;

const Spinner: ISpinnerProps = ({ color, size, style, ...props }) => {
  const { themeColors } = useTheme();
  return (
    <ActivityIndicator
      color={themeColors[color || 'main']}
      size={size}
      {...props}
      style={[style]}
    />
  );
};

export default Spinner;
