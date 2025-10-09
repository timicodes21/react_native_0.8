import React, { useEffect } from 'react';
import { Pressable } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { Check } from 'lucide-react-native';
import { IThemeColor, useAppTheme } from '@/app/providers/theme';
import { HIT_SLOP } from '@/app/constants/values';

interface CheckboxProps {
  checked: boolean;
  onChange: (value: boolean) => void;
  size?: number;
  activeColor?: IThemeColor;
  inactiveColor?: IThemeColor;
  borderColor?: IThemeColor;
  disabled?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  size = 26,
  activeColor = 'primary',
  inactiveColor = 'background',
  borderColor = 'secondary',
  disabled = false,
}) => {
  const { theme } = useAppTheme();

  // ✅ Store actual color values instead of theme keys
  const background = useSharedValue(theme.colors[inactiveColor]);
  const border = useSharedValue(theme.colors[borderColor]);
  const scale = useSharedValue(1);

  useEffect(() => {
    scale.value = withSpring(checked ? 1.1 : 1);

    background.value = withTiming(
      checked ? theme.colors[activeColor] : theme.colors[inactiveColor],
      { duration: 200 },
    );

    border.value = withTiming(
      checked ? theme.colors[activeColor] : theme.colors[borderColor],
      { duration: 200 },
    );
  }, [checked, theme]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    backgroundColor: background.value,
    borderColor: border.value,
  }));

  return (
    <Pressable
      onPress={() => !disabled && onChange(!checked)}
      hitSlop={HIT_SLOP(10)}
      accessibilityRole="checkbox"
      accessibilityState={{ checked, disabled }}
      style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Animated.View
        style={[
          animatedStyle,
          {
            width: size,
            height: size,
            borderRadius: size / 2,
            borderWidth: 2,
            justifyContent: 'center',
            alignItems: 'center',
          },
        ]}>
        {checked && (
          <Check
            size={size * 0.6}
            color={theme.colors.background} // contrast icon color
            strokeWidth={3}
          />
        )}
      </Animated.View>
    </Pressable>
  );
};
