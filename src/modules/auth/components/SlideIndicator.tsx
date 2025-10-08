import { View, StyleSheet, Animated, Dimensions } from 'react-native';
import React from 'react';

interface IProps {
  data: number[];
  scrollX: Animated.Value;
}

const { width } = Dimensions.get('screen');

export const SlideIndicator: React.FC<IProps> = ({ data, scrollX }) => {
  return (
    <View style={styles.container}>
      {data?.map((_, idx) => {
        const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [12, 30, 12],
          extrapolate: 'clamp',
        });

        const backgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: ['#514662', '#FFFFFF', '#514662'],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            style={[styles.dot, { backgroundColor, width: dotWidth }]}
            key={`${idx}`}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 12,
    height: 6,
    borderRadius: 6,
    marginHorizontal: 3,
  },
});
