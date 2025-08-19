import React, { useEffect, useMemo } from 'react';
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import { asyncGet, asyncStore } from '../../../shared/utils/storage.util';
import {
  IThemeName,
  IThemeProviderProps,
  IThemeSwitchWaitProps,
} from './interfaces';
import { DarkThemeColors, IThemeColor, LightThemeColors } from './theme';
import { ThemeContext } from './themeContext';
import { StoreKeys } from '@/app/constants/store';

const sleep = async (duration: number): Promise<number> => {
  return new Promise(res => {
    setTimeout(() => {
      res(duration);
    }, duration);
  });
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  switchWaitText: {
    marginVertical: 20,
    fontSize: 20,
    lineHeight: 22,
    textAlign: 'center',
  },
  switchWaitContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});

/**
 * This component replaces the app and is show to the user while the
 * application theme is being selected.
 * @param {IThemeSwitchWaitProps} props
 * @returns React.ReactElement
 */
const ThemeSwitchWait: React.FC<IThemeSwitchWaitProps> = ({
  backgroundColor,
  textColor,
}) => {
  return (
    <View style={[styles.switchWaitContainer, { backgroundColor }]}>
      <ActivityIndicator color={textColor} />
    </View>
  );
};

/**
 * This component serves as the theme provider and sets the interface for
 * switching and getting the selected theme.
 * @returns React.ReactElement
 */
export const ThemeProvider: IThemeProviderProps = ({ children }) => {
  const systemColorScheme = useColorScheme();
  const [theme, setTheme] = React.useState<IThemeName>(
    systemColorScheme === 'dark' ? 'dark' : 'light',
  );
  const [isPending, setIsPending] = React.useState<boolean>(true);
  const [colors, setColors] =
    React.useState<Record<IThemeColor, string>>(DarkThemeColors);

  useEffect(() => {
    setTheme(systemColorScheme === 'dark' ? 'dark' : 'light');
  }, [systemColorScheme]);

  const changeTheme = async (name: IThemeName) => {
    // toggle pending mode on
    setIsPending(true);
    // persist new them
    try {
      await asyncStore(StoreKeys.THEME, name);
    } catch (error) {
      console.error('error saving theme', error);
    }
    // update theme in state
    await sleep(1500);
    // set theme colors
    setColors(name === 'light' ? LightThemeColors : DarkThemeColors);
    // set current theme
    setTheme(name);
    // toggle pending mode off
    setIsPending(false);
  };

  /**
   * This method is used to set the initial theme, this will get the selected
   * theme from the async store.
   */
  const setInitialTheme = React.useCallback(
    async function setInitialTheme() {
      const persistedTheme = await asyncGet<IThemeName>(StoreKeys.THEME);
      // no need to select theme if alternate theme is not set
      if (persistedTheme !== 'light') {
        // change android navigation bar color
        // toggle pending mode off and load application
        return setIsPending(false);
      }
      // change android navigation bar color

      // change theme to the persisted theme
      return changeTheme(persistedTheme);
    },
    [changeTheme],
  );

  // handle component did mount
  useEffect(() => {
    setInitialTheme();
  }, []);

  const value = useMemo(() => {
    return {
      currentTheme: theme,
      changeTheme,
      themeColors: colors,
    };
  }, [theme, changeTheme, colors]);

  // render the app
  return (
    <ThemeContext.Provider value={value}>
      {!isPending ? (
        <View
          style={[styles.container, { backgroundColor: colors.background }]}>
          <StatusBar
            barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
            backgroundColor={colors.background}
            hidden={false}
          />
          {children}
        </View>
      ) : (
        <ThemeSwitchWait
          backgroundColor={colors.background}
          textColor={colors.main}
        />
      )}
    </ThemeContext.Provider>
  );
};
