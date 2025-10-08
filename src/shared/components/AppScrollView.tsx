import React, { ReactNode, useMemo } from 'react';
import {
  ScrollView,
  ScrollViewProps,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAppTheme } from '@/app/providers/theme/themeContext';
import { SCREEN_HORIZONTAL_SPACING } from '@/app/constants/values';

/**
 * AppScrollView — A theme-aware, safe-area-compliant scroll container.
 *
 * ✅ Automatically applies safe bottom padding
 * ✅ Supports optional horizontal padding
 * ✅ Respects theme spacing tokens
 * ✅ Memoized for performance
 */
export interface AppScrollViewProps extends ScrollViewProps {
  children: ReactNode;
  /** Extra padding below the content */
  pb?: number;
  /** Disable horizontal padding */
  noHorizontalPadding?: boolean;
  /** Optional container style override */
  contentContainerStyle?: StyleProp<ViewStyle>;
}

export const AppScrollView: React.FC<AppScrollViewProps> = React.memo(
  ({
    children,
    pb = 15,
    noHorizontalPadding,
    contentContainerStyle,
    ...rest
  }) => {
    const { bottom } = useSafeAreaInsets();
    const { theme } = useAppTheme();

    const containerStyles = useMemo<StyleProp<ViewStyle>>(
      () => [
        {
          paddingBottom: bottom + pb,
          paddingHorizontal: noHorizontalPadding
            ? 0
            : SCREEN_HORIZONTAL_SPACING,
        },
        contentContainerStyle,
      ],
      [bottom, pb, noHorizontalPadding, theme.spacing, contentContainerStyle],
    );

    return (
      <ScrollView
        {...rest}
        contentContainerStyle={containerStyles}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        {children}
      </ScrollView>
    );
  },
);

AppScrollView.displayName = 'AppScrollView';
