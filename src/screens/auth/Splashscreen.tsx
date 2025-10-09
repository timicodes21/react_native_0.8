import React, { useEffect } from 'react';
import { splashscreenStyles as styles } from '@/modules/auth/styles';
import { AppImage, AppScreen, Typography } from '@/shared/components';
import { AppLogoMark } from '@/shared/icons';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  withDelay,
} from 'react-native-reanimated';
import LightRay from '@/app/assets/images/splashscreen-ray.png';
import {
  AuthNavigationEnum,
  AuthScreenNavigationProps,
} from '@/app/navigators/types/auth';
import { runOnJS } from 'react-native-worklets';

const ANIM_DURATION = 1500;
const TEXT_DELAY = 500;
const LOGO_INITIAL_SCALE = 0.5;
const TEXT_INITIAL_TRANSLATE_Y = 50;

export const Splashscreen: AuthScreenNavigationProps<
  AuthNavigationEnum.SPLASHSCREEN
> = ({ navigation }) => {
  const logoOpacity = useSharedValue(0);
  const logoScale = useSharedValue(LOGO_INITIAL_SCALE);
  const textOpacity = useSharedValue(0);
  const textTranslateY = useSharedValue(TEXT_INITIAL_TRANSLATE_Y);

  const handleNavigate = () => {
    navigation.replace(AuthNavigationEnum.CHOOSE_INTERESTS);
  };

  useEffect(() => {
    logoOpacity.value = withTiming(1, {
      duration: ANIM_DURATION,
      easing: Easing.out(Easing.exp),
    });
    logoScale.value = withTiming(1, {
      duration: ANIM_DURATION,
      easing: Easing.out(Easing.exp),
    });

    textOpacity.value = withDelay(
      TEXT_DELAY,
      withTiming(
        1,
        { duration: ANIM_DURATION, easing: Easing.out(Easing.exp) },
        isFinished => {
          if (isFinished) {
            runOnJS(handleNavigate)(); // ✅ call JS function safely
          }
        },
      ),
    );

    textTranslateY.value = withDelay(
      TEXT_DELAY,
      withTiming(0, {
        duration: ANIM_DURATION,
        easing: Easing.out(Easing.exp),
      }),
    );
  }, []);

  const logoAnimatedStyle = useAnimatedStyle(() => ({
    opacity: logoOpacity.value,
    transform: [{ scale: logoScale.value }],
  }));

  const textAnimatedStyle = useAnimatedStyle(() => ({
    opacity: textOpacity.value,
    transform: [{ translateY: textTranslateY.value }],
  }));

  return (
    <AppScreen style={styles.container}>
      <Animated.View style={logoAnimatedStyle}>
        <AppLogoMark />
      </Animated.View>
      <Animated.View style={[textAnimatedStyle]}>
        <Typography fontFamily="proxima" center size={23}>
          Femi Lazarus
          <Typography
            size={23}
            weight="bold"
            fontFamily="proxima"
            center
            style={[styles.text]}>
            {'\n'}Digital Library
          </Typography>
        </Typography>
      </Animated.View>
      <AppImage source={LightRay} containerStyle={[styles.imageRay]} />
    </AppScreen>
  );
};

Splashscreen.displayName = 'Splashscreen';
