import React from 'react';
import {
  ActivityIndicator,
  ActivityIndicatorProps,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { useAppTheme } from '@/app/providers/theme/themeContext';
import { IThemeColor } from '@/app/providers/theme/theme';

interface SpinnerProps extends ActivityIndicatorProps {
  /** The theme color key to use for the spinner */
  color?: IThemeColor;
  /** Size of the spinner — defaults to "small" */
  size?: 'small' | 'large' | number;
  /** Optional custom style */
  style?: StyleProp<ViewStyle>;
}

/**
 * @description
 * A theme-aware loading spinner that adapts automatically
 * to the current app theme.
 *
 * Usage:
 * ```tsx
 * <Spinner />
 * <Spinner size="large" color="primary" />
 * ```
 */
export const Spinner: React.FC<SpinnerProps> = ({
  color = 'main',
  size = 'small',
  style,
  ...props
}) => {
  const { theme } = useAppTheme();

  return (
    <ActivityIndicator
      {...props}
      color={theme.colors[color]}
      size={size}
      style={style}
    />
  );
};

Spinner.displayName = 'Spinner';
