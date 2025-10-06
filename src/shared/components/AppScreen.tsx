import React, { ReactNode } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  StatusBarStyle,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import { useAppTheme } from '@/app/providers/theme/themeContext';
import { AppTheme } from '@/app/providers/theme/interfaces';

interface AppScreenProps {
  /** Optional style for the screen container */
  style?: StyleProp<ViewStyle>;
  /** If true, disables the KeyboardAvoidingView wrapper */
  noKeyboardAvoidingView?: boolean;
  /** Status bar style (light-content by default) */
  statusBarStyle?: StatusBarStyle;
  /** Screen children */
  children?: ReactNode;
}

/**
 * @description
 * Global screen wrapper that applies theme background,
 * status bar configuration, and optional keyboard handling.
 *
 * Usage:
 * ```tsx
 * <AppScreen>
 *   <LoginForm />
 * </AppScreen>
 * ```
 */
export const AppScreen: React.FC<AppScreenProps> = ({
  children,
  style,
  statusBarStyle = 'light-content',
  noKeyboardAvoidingView = false,
}) => {
  const { theme } = useAppTheme();
  const styles = getStyles(theme);

  const Wrapper = noKeyboardAvoidingView ? View : KeyboardAvoidingView;

  return (
    <Wrapper
      style={[styles.container, style]}
      behavior={
        Platform.OS === 'ios' && !noKeyboardAvoidingView ? 'padding' : undefined
      }>
      <StatusBar
        barStyle={statusBarStyle}
        backgroundColor={theme.colors.screenBG}
      />
      {children}
    </Wrapper>
  );
};

const getStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
  });
