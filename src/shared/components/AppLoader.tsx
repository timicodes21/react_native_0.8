// shared/components/AppLoader.tsx
import { useAppTheme } from '@/app/providers/theme';
import React, { useEffect } from 'react';
import { ActivityIndicator, Keyboard, StyleSheet, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { Typography } from './Typography';

interface AppLoaderProps {
  visible: boolean;
  text?: string;
}

const Loader: React.FC<AppLoaderProps> = ({ visible, text }) => {
  const { theme } = useAppTheme();
  const opacity = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  useEffect(() => {
    Keyboard.dismiss();
    opacity.value = withTiming(visible ? 1 : 0, { duration: 200 });
  }, [visible]);

  if (!visible) return null;

  return (
    <Animated.View style={[styles.overlay, animatedStyle]}>
      <View
        style={[styles.container, { backgroundColor: theme.colors.backdrop }]}>
        {text && (
          <Typography weight="bold" style={styles.text} center>
            {text}
          </Typography>
        )}
        <ActivityIndicator color={theme.colors.main} size="large" />
      </View>
    </Animated.View>
  );
};

Loader.displayName = 'AppLoader';

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 9999,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  text: {
    marginBottom: 12,
  },
});

export const AppLoader = Loader;
