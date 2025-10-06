import React from 'react';
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';
import { IThemeColor } from '../../app/providers/theme/theme';
import { useAppTheme } from '../../app/providers/theme/themeContext';

type ISpinnerProps = React.FC<
  ActivityIndicatorProps & {
    color?: IThemeColor;
    size?: 'small' | 'large' | number;
  }
>;

const Spinner: ISpinnerProps = ({ color, size, style, ...props }) => {
  const { theme } = useAppTheme();
  return (
    <ActivityIndicator
      color={theme.colors[color || 'main']}
      size={size}
      {...props}
      style={[style]}
    />
  );
};

export default Spinner;
