import { Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import React, { useEffect, useMemo } from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { ToastParams } from './interfaces';
import { font, FULL_WIDTH } from '@/app/constants/values';
import { useAppTheme } from '../theme';

const Toast: React.FC<ToastParams & { onHide: () => void }> = ({
  message,
  onHide,
}) => {
  const translateY = useSharedValue(100);
  const opacity = useSharedValue(0);
  const { theme } = useAppTheme();

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
    opacity: opacity.value,
  }));

  useEffect(() => {
    // Animate in
    translateY.value = withTiming(0, { duration: 300 });
    opacity.value = withTiming(1, { duration: 300 });

    // Auto-dismiss
    const timer = setTimeout(() => {
      // Start exit animation
      translateY.value = withTiming(100, { duration: 300 });
      opacity.value = withTiming(0, { duration: 300 });

      // Remove after animation ends
      const removeTimer = setTimeout(() => {
        onHide();
      }, 300); // match animation duration

      return () => clearTimeout(removeTimer);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const backgroundStyle: ViewStyle = useMemo(
    () => ({
      backgroundColor: theme.colors.toastBg,
    }),
    [theme],
  );

  const textStyle: TextStyle = useMemo(
    () => ({
      color: theme.colors.main,
      shadowColor: theme.colors.primary,
    }),
    [theme],
  );

  return (
    <Animated.View style={[animatedStyles, styles.toast, backgroundStyle]}>
      <Text style={[styles.text, textStyle]}>{message}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  toast: {
    backgroundColor: 'black',
    paddingHorizontal: 16,
    paddingVertical: font.h(16),
    borderRadius: 8,
    marginTop: 8,
    width: FULL_WIDTH,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  text: {
    color: 'white',
    fontSize: font.w(14),
    fontWeight: '600',
  },
});

export default Toast;
