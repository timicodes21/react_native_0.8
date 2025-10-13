import React, { ReactNode, useMemo } from 'react';
import {
  ActivityIndicator,
  DimensionValue,
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';
import {
  IFontColor,
  IFontSize,
  IFontWeight,
} from '@/app/configs/typography.config';
import { AppTheme, stylesWithTheme, useAppTheme } from '@/app/providers/theme';
import { HIT_SLOP } from '@/app/constants/values';
import { Typography } from './Typography';

export type IButtonMode = 'primary' | 'transparent' | 'secondary';

interface IAppButtonProps extends TouchableOpacityProps {
  radius?: number;
  width?: DimensionValue;
  children?: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  mode?: IButtonMode;
  py?: keyof AppTheme['spacing'];
  px?: keyof AppTheme['spacing'];
  disabled?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  fontSize?: IFontSize;
  fontWeight?: IFontWeight;
  isLoading?: boolean;
  textColor?: IFontColor;
  leftIconContainerStyle?: StyleProp<ViewStyle>;
  rightIconContainerStyle?: StyleProp<ViewStyle>;
}

export const AppButton: React.FC<IAppButtonProps> = ({
  children,
  containerStyle,
  isLoading = false,
  disabled = false,
  py = 'md',
  px = 'none',
  radius = 4,
  leftIcon,
  rightIcon,
  textColor,
  fontWeight = 'semi-bold',
  mode = 'primary',
  fontSize = 'regular',
  width = 'auto',
  leftIconContainerStyle,
  rightIconContainerStyle,
  ...rest
}) => {
  const { theme } = useAppTheme();
  const styles = useStyles();

  const containerMap: Record<IButtonMode, ViewStyle> = useMemo(() => {
    return {
      primary: {
        backgroundColor: disabled
          ? theme.colors.primaryBtnDisabled
          : theme.colors.primary,
        borderColor: disabled
          ? theme.colors.primaryBtnDisabled
          : theme.colors.primary,
      },
      transparent: {
        backgroundColor: theme.colors.primary,
        borderColor: theme.colors.primary,
      },
      secondary: {
        backgroundColor: theme.colors.primary,
        borderColor: theme.colors.primary,
      },
    };
  }, [disabled]);

  const textMap: Record<IButtonMode, IFontColor> = useMemo(() => {
    return {
      primary: 'primaryButtonText',
      transparent: 'main',
      secondary: 'main',
    };
  }, []);

  return (
    <View style={containerStyle}>
      <TouchableOpacity
        activeOpacity={0.8}
        accessibilityState={{ disabled, busy: isLoading }}
        {...rest}
        disabled={disabled || isLoading}
        hitSlop={HIT_SLOP(5)}
        accessibilityRole="button"
        style={[
          styles.button,
          {
            paddingVertical: theme.spacing[py],
            paddingHorizontal: theme.spacing[px],
            borderRadius: theme.radius.full ?? radius,
            width,
            backgroundColor: containerMap[mode].backgroundColor,
            borderColor: containerMap[mode].borderColor,
          },
        ]}>
        {isLoading ? (
          <ActivityIndicator color={theme.colors[textMap[mode]]} />
        ) : (
          <View style={styles.flexContainer}>
            {leftIcon && (
              <View style={[styles.leftIcon, leftIconContainerStyle]}>
                {leftIcon}
              </View>
            )}
            <Typography
              weight={fontWeight}
              color={textColor || textMap[mode]}
              size={fontSize}>
              {children}
            </Typography>
            {rightIcon && (
              <View style={[styles.rightIcon, rightIconContainerStyle]}>
                {rightIcon}
              </View>
            )}
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const useStyles = stylesWithTheme(theme => ({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.75,
  },
  flexContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftIcon: {
    marginRight: theme.spacing.xs,
  },
  rightIcon: {
    marginLeft: theme.spacing.xs,
  },
}));

AppButton.displayName = 'AppButton';
