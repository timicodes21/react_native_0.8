import React, { ReactNode, useMemo } from 'react';
import {
  Platform,
  StyleProp,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { ErrorText, Typography } from './Typography';
import { AppTheme, stylesWithTheme, useAppTheme } from '@/app/providers/theme';
import { HIT_SLOP } from '@/app/constants/values';

export interface InputProps extends TextInputProps {
  mb?: keyof AppTheme['spacing']; // use theme spacing keys instead of raw numbers
  mt?: keyof AppTheme['spacing'];
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
  radius?: number;
  label?: string;
  containerStyle?: StyleProp<ViewStyle>;
  wrapperStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<TextStyle>;
  errorText?: string;
  bgColor?: keyof AppTheme['colors'];
  borderColor?: keyof AppTheme['colors'];
}

export const AppInput: React.FC<InputProps> = ({
  mb = 'none',
  mt = 'none',
  rightIcon,
  leftIcon,
  radius,
  label,
  containerStyle,
  wrapperStyle,
  errorText,
  style,
  bgColor = 'inputBg',
  borderColor = 'inputBorder',
  placeholder,
  editable = true,
  ...rest
}) => {
  const { theme, currentTheme } = useAppTheme();
  const styles = useStyles();

  // 🎨 compute runtime styles (dynamic ones only)
  const containerDynamicStyle = useMemo(
    () => ({
      borderRadius: radius ?? theme.radius.md,
      backgroundColor: theme.colors[bgColor],
      borderColor: theme.colors[borderColor ?? bgColor],
    }),
    [radius, theme, bgColor, borderColor],
  );

  return (
    <View
      style={[
        { marginBottom: theme.spacing[mb], marginTop: theme.spacing[mt] },
        wrapperStyle,
      ]}>
      {label && (
        <Typography
          weight="medium"
          style={styles.labelText}
          accessibilityLabel={`${label}-label`}>
          {label}
        </Typography>
      )}

      <View
        style={[
          styles.container,
          containerDynamicStyle,
          containerStyle,
          !editable && styles.disabledContainer,
          errorText && styles.errorContainer,
        ]}>
        {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}

        <TextInput
          {...rest}
          editable={editable}
          placeholder={placeholder || label}
          placeholderTextColor={theme.colors.placeholder}
          keyboardAppearance={currentTheme === 'dark' ? 'dark' : 'light'}
          style={[styles.input, style]}
          accessibilityLabel={label || placeholder}
          hitSlop={HIT_SLOP(8)}
        />

        {rightIcon && <View style={styles.rightIcon}>{rightIcon}</View>}
      </View>

      {errorText && <ErrorText>{errorText}</ErrorText>}
    </View>
  );
};

//
// ---------------- THEME STYLES ----------------
//
const useStyles = stylesWithTheme(theme => ({
  container: {
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.lg,
  },
  disabledContainer: {
    backgroundColor: theme.colors.inputBg,
    borderColor: theme.colors.inputBg,
    opacity: 0.7,
  },
  errorContainer: {
    borderColor: theme.colors.error,
  },
  input: {
    flex: 1,
    fontFamily: theme.typography.fontFamily.regular,
    fontWeight: '400',
    color: theme.colors.inputText,
    fontSize: theme.typography.sizes.regular,
    paddingVertical: Platform.select({
      ios: theme.spacing.md,
      android: theme.spacing.md,
    }),
  },
  labelText: {
    marginBottom: theme.spacing.xs,
    color: theme.colors.main,
  },
  leftIcon: {
    marginRight: theme.spacing.xs,
  },
  rightIcon: {
    marginLeft: theme.spacing.xs,
  },
}));
