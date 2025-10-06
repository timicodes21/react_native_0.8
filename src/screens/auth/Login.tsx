import { stylesWithTheme, useAppTheme } from '@/app/providers/theme';
import { AppButton, AppInput, AppScreen } from '@/shared/components';
import React from 'react';

export const Login = () => {
  const styles = navStyles();
  const { changeTheme, currentTheme } = useAppTheme();
  return (
    <AppScreen style={{ paddingTop: 100, paddingHorizontal: 20 }}>
      <AppInput placeholder="Email" />

      <AppButton
        containerStyle={styles.button}
        onPress={() => {
          changeTheme(currentTheme === 'light' ? 'dark' : 'light');
        }}>
        Change Theme
      </AppButton>
    </AppScreen>
  );
};

const navStyles = stylesWithTheme(theme => ({
  header: { color: theme.colors.error },
  button: {
    marginHorizontal: theme.spacing.lg,
    marginTop: theme.spacing.xl,
  },
}));
