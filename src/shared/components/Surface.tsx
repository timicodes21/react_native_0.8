import React, { ReactNode } from 'react';
import { Platform, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { IThemeColor } from '../../app/providers/theme/theme';
import { useAppTheme } from '@/app/providers/theme';

interface IProps {
  color?: IThemeColor; // Theme background color key
  size?: number; // Square dimension (width = height)
  radius?: number; // Custom border radius
  width?: number; // Manual width override
  height?: number; // Manual height override
  borderColor?: IThemeColor; // Border color (theme or raw color)
  borderWidth?: number; // Border width
  shadow?: boolean; // Optional shadow flag
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

export const Surface: React.FC<IProps> = ({
  color = 'inputBg',
  size = 40,
  radius,
  width,
  height,
  borderColor,
  borderWidth,
  shadow = false,
  children,
  style,
}) => {
  const { theme } = useAppTheme();

  const containerStyle: StyleProp<ViewStyle> = [
    styles.container,
    {
      width: width || size,
      height: height || size,
      borderRadius: radius ?? size / 2,
      backgroundColor: theme.colors[color],
      ...(borderWidth && {
        borderWidth,
        borderColor: theme.colors[borderColor || 'border'],
      }),
      ...(shadow ? shadowStyle : {}),
    },
    style,
  ];

  return <View style={containerStyle}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const shadowStyle: ViewStyle = Platform.select({
  ios: {
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 6,
    // shadowOffset: { width: 0, height: 3 },
  },
  android: {
    elevation: 4,
  },
}) as ViewStyle;

Surface.displayName = 'Surface';
