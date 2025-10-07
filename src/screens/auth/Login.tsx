import { stylesWithTheme, useAppTheme } from '@/app/providers/theme';
import {
  AppButton,
  AppImage,
  AppInput,
  AppScreen,
  AppScrollView,
} from '@/shared/components';
import React, { useEffect } from 'react';
import { useLoader } from '@/app/providers/loader';
import { AppLogoMark } from '@/shared/icons';

export const Login = () => {
  const styles = navStyles();
  const { changeTheme, currentTheme } = useAppTheme();
  const { showLoader } = useLoader();

  useEffect(() => {
    showLoader({ text: 'Loading...' });
  }, []);

  return (
    <AppScreen style={{ paddingTop: 100 }}>
      <AppScrollView>
        <AppInput placeholder="Email" />

        <AppLogoMark />

        <AppImage
          containerStyle={{ width: 300, height: 300, marginVertical: 20 }}
          style={{ borderRadius: 12 }}
        />

        <AppButton
          containerStyle={styles.button}
          onPress={() => {
            changeTheme(currentTheme === 'light' ? 'dark' : 'light');
          }}>
          Change Theme
        </AppButton>
      </AppScrollView>
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

Login.displayName = 'Login';
