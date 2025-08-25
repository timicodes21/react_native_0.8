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
import { CustomTheme } from '../../app/providers/theme/interfaces';
import { useTheme } from '../../app/providers/theme/themeContext';

type IScreenWrapperProps = React.FC<{
  style?: StyleProp<ViewStyle>;
  noKeyboardAvoidingView?: boolean;
  children?: ReactNode;
  statusBarStyle?: StatusBarStyle;
}>;

/**
 * This component is used to configure screens.
 * @param props IScreenProps
 * @returns React.ReactElement
 */

const ScreenWrapper: IScreenWrapperProps = ({
  children,
  style,
  statusBarStyle,
  noKeyboardAvoidingView,
}) => {
  const { themeColors } = useTheme();
  const styles = stylesheet(themeColors);

  return noKeyboardAvoidingView ? (
    <View style={[styles.container, style]}>
      <StatusBar
        barStyle={statusBarStyle || 'light-content'}
        backgroundColor={themeColors.screenBG}
      />
      {children}
    </View>
  ) : (
    <KeyboardAvoidingView
      style={[styles.container, style]}
      behavior={Platform.select({ ios: 'padding', android: undefined })}>
      <StatusBar
        barStyle={statusBarStyle || 'light-content'}
        backgroundColor={themeColors.screenBG}
      />
      {children}
    </KeyboardAvoidingView>
  );
};

const stylesheet = (theme: CustomTheme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
  });
};

export default ScreenWrapper;
