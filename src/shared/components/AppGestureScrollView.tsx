import React, { ReactNode, memo } from 'react';
import { ScrollViewProps, StyleProp, ViewStyle } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface AppGestureScrollViewProps extends ScrollViewProps {
  children: ReactNode;
  /** Additional padding at the bottom (in px). Default = 100 */
  pb?: number;
  /** Optional additional content container styling */
  contentContainerStyle?: StyleProp<ViewStyle>;
}

/**
 * AppGestureScrollView — A gesture-enabled ScrollView designed
 * for use inside bottom sheets or modals with pan gestures.
 *
 * ✅ Uses `react-native-gesture-handler` ScrollView for gesture compatibility
 * ✅ Automatically respects safe area insets
 * ✅ Memoized for performance
 */
export const AppGestureScrollView: React.FC<AppGestureScrollViewProps> = memo(
  ({ children, pb = 100, contentContainerStyle, ...rest }) => {
    const { bottom } = useSafeAreaInsets();

    return (
      <ScrollView
        {...rest}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: bottom + pb },
          contentContainerStyle,
        ]}>
        {children}
      </ScrollView>
    );
  },
);

AppGestureScrollView.displayName = 'AppGestureScrollView';
