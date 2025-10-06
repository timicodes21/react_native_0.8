// ThemeProvider.tsx
import React, { PropsWithChildren, useEffect, useMemo, useState } from 'react';
import {
  StatusBar,
  View,
  ActivityIndicator,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import { asyncGet, asyncStore } from '@/shared/utils/storage.util';
import { StoreKeys } from '@/app/constants/store';
import { IThemeName } from './interfaces';
import { LightTheme, DarkTheme } from './theme';
import { ThemeContext } from './themeContext';

const styles = StyleSheet.create({
  container: { flex: 1 },
  switchWaitContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const systemScheme = useColorScheme();
  const [theme, setTheme] = useState<IThemeName>('light');
  const [loading, setLoading] = useState(true);

  // Load persisted theme or fallback to system
  useEffect(() => {
    const loadTheme = async () => {
      const persisted = await asyncGet<IThemeName>(StoreKeys.THEME);
      if (persisted) {
        setTheme(persisted);
      } else {
        setTheme(systemScheme === 'dark' ? 'dark' : 'light');
      }
      setLoading(false);
    };
    loadTheme();
  }, [systemScheme]);

  const themeObject = useMemo(
    () => (theme === 'light' ? LightTheme : DarkTheme),
    [theme],
  );

  const changeTheme = (name: IThemeName) => {
    setTheme(name); // optimistic UI
    asyncStore(StoreKeys.THEME, name).catch(err =>
      console.error('Failed to persist theme:', err),
    );
  };

  if (loading) {
    return (
      <View
        style={[
          styles.switchWaitContainer,
          { backgroundColor: themeObject.colors.background },
        ]}>
        <ActivityIndicator color={themeObject.colors.main} />
      </View>
    );
  }

  return (
    <ThemeContext.Provider
      value={{
        currentTheme: theme,
        changeTheme,
        theme: themeObject,
      }}>
      <View
        style={[
          styles.container,
          { backgroundColor: themeObject.colors.background },
        ]}>
        <StatusBar
          barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
          backgroundColor={themeObject.colors.background}
        />
        {children}
      </View>
    </ThemeContext.Provider>
  );
};
