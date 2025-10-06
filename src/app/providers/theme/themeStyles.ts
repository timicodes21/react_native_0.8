// themeStyles.ts
import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { AppTheme, useAppTheme } from '@/app/providers/theme';

type Styles<T extends StyleSheet.NamedStyles<T>> = T;

export function stylesWithTheme<
  T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>,
>(stylesFn: (theme: AppTheme) => T) {
  return () => {
    const { theme } = useAppTheme();

    return useMemo(() => StyleSheet.create(stylesFn(theme)), [theme]);
  };
}
