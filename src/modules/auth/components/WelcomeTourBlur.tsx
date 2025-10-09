import { Platform, StyleSheet } from 'react-native';
import React, { ReactNode } from 'react';
import { BlurView } from '@react-native-community/blur';
import { FULL_WIDTH } from '@/app/constants/values';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

interface IProps {
  children: ReactNode;
}

export const WelcomeTourBlur: React.FC<IProps> = ({ children }) => {
  const { bottom } = useSafeAreaInsets();

  return Platform.OS === 'web' ? (
    <BlurView
      style={[styles.contentCard, { marginBottom: bottom + 20 }]}
      blurType="regular"
      blurAmount={25}
      reducedTransparencyFallbackColor="rgba(255,255,255,0.05)">
      {children}
    </BlurView>
  ) : (
    <LinearGradient
      colors={['rgba(40, 0, 70, 0.6)', 'rgba(10, 0, 20, 0.6)']}
      // colors={['rgba(0, 0, 0, 0.4)', 'rgba(0, 0, 0, 0.4)']}
      style={[styles.contentCard, { marginBottom: bottom + 20 }]}>
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  contentCard: {
    marginHorizontal: 16,
    position: 'absolute',
    bottom: 0,
    width: FULL_WIDTH,
    height: 350,
    // backgroundColor: theme.colors.background,
    borderRadius: 20,
    paddingTop: 30,
    paddingBottom: 20,
  },
});
