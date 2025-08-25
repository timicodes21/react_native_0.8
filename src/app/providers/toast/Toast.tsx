import { Text, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { ToastParams } from './interfaces';
import { font, FULL_WIDTH } from '@/app/constants/values';

const Toast: React.FC<ToastParams & { onHide: () => void }> = ({
  message,
  onHide,
}) => {
  const translateY = useSharedValue(100);
  const opacity = useSharedValue(0);

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

  return (
    <Animated.View style={[animatedStyles, styles.toast]}>
      <Text style={styles.text}>{message}</Text>
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
  },
  text: {
    color: 'white',
    fontSize: font.w(14),
    fontWeight: '600',
  },
});

export default Toast;
