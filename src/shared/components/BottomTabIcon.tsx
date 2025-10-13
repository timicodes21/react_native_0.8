import React, { memo, ReactNode } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { Surface } from './Surface';

interface BottomTabIconProps {
  name: string;
  icon: ReactNode;
  focusedIcon?: ReactNode;
  focused?: boolean;
  disabled?: boolean;
  containerStyle?: ViewStyle;
}

export const BottomTabIcon = memo<BottomTabIconProps>(
  ({
    name,
    icon,
    focusedIcon,
    focused = false,
    disabled = false,
    containerStyle,
  }) => {
    const activeIcon = focused && focusedIcon ? focusedIcon : icon;

    return (
      <View
        accessibilityRole="button"
        accessibilityLabel={name}
        accessibilityState={{ selected: focused, disabled }}
        style={[styles.container, containerStyle]}>
        <Surface size={50} color={focused ? 'primary' : 'grayBg'} radius={16}>
          {activeIcon}
        </Surface>
      </View>
    );
  },
);

BottomTabIcon.displayName = 'BottomTabIcon';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    // Use spacing token instead of hard-coded value
  },
});
