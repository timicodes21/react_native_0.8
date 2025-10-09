import React, { useRef, useState } from 'react';
import {
  AppScreen,
  AppTouchableOpacity,
  Typography,
} from '@/shared/components';
import WelcomeImage from '@/app/assets/images/welcome-tour-one.png';
import { welcomeTourStyles } from '@/modules/auth/styles';
import {
  Animated,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  View,
  ViewToken,
} from 'react-native';
import {
  SlideIndicator,
  WelcomeTourBlur,
  WelcomeTourItem,
} from '@/modules/auth/components';
import { TOUCH_OPACITY } from '@/app/constants/values';
import {
  AuthNavigationEnum,
  AuthScreenNavigationProps,
} from '@/app/navigators/types/auth';
import i18n from '@/app/providers/i18n/i18n';

const data = [
  {
    image: WelcomeImage,
    title: i18n.t('welcomeTour.audioTitle'),
    highlight: i18n.t('welcomeTour.audioHeadline'),
    content: i18n.t('welcomeTour.audioDescription'),
  },
  {
    image: WelcomeImage,
    title: i18n.t('welcomeTour.videoTitle'),
    highlight: i18n.t('welcomeTour.videoHeadline'),
    content: i18n.t('welcomeTour.audioDescription'),
  },
  {
    image: WelcomeImage,
    title: i18n.t('welcomeTour.videoTitle'),
    highlight: i18n.t('welcomeTour.ebooksHeadline'),
    content: i18n.t('welcomeTour.audioDescription'),
  },
];

export const WelcomeTour: AuthScreenNavigationProps<
  AuthNavigationEnum.WELCOME_TOUR
> = ({ navigation }) => {
  const styles = welcomeTourStyles();

  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollRef = useRef<FlatList>(null);

  const handleOnScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    // Animated.event
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      { useNativeDriver: false },
    )(event);
  };

  const handleOnViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      setIndex(viewableItems[0]?.index ?? 0);
    },
  ).current;

  const viewabliltyConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  const handleSkip = () => {
    navigation.replace(AuthNavigationEnum.LOGIN);
  };

  // 🟣 Function to move to the next slide
  const handleNext = () => {
    if (index < data.length - 1) {
      scrollRef.current?.scrollToIndex({ index: index + 1, animated: true });
    } else {
      handleSkip();
    }
  };

  return (
    <AppScreen>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={[
          styles.container,
          //   { height: SCREEN_HEIGHT - (bottom + 30) },
        ]}
        data={data}
        onScroll={handleOnScroll}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={viewabliltyConfig}
        ref={scrollRef}
        pagingEnabled
        renderItem={({ item }) => <WelcomeTourItem image={item.image} />}
      />
      <WelcomeTourBlur>
        <View style={[styles.contentCon]}>
          <Typography weight="bold" style={[styles.text]}>
            {data[index].title}
          </Typography>
          <Typography
            weight="black"
            fontFamily="roboto"
            size={40}
            style={[styles.hightLightText]}>
            {data[index].highlight}
          </Typography>
          <Typography style={[styles.text]}>{data[index].content}</Typography>
          <View style={[styles.bottomItems]}>
            <AppTouchableOpacity
              activeOpacity={TOUCH_OPACITY}
              onPress={handleSkip}>
              <Typography style={[styles.text]} weight="medium">
                Skip
              </Typography>
            </AppTouchableOpacity>
            <SlideIndicator data={[1, 2, 3]} scrollX={scrollX} />
            <AppTouchableOpacity
              activeOpacity={TOUCH_OPACITY}
              onPress={handleNext}>
              <Typography style={[styles.text]} weight="medium">
                Next
              </Typography>
            </AppTouchableOpacity>
          </View>
        </View>
      </WelcomeTourBlur>
    </AppScreen>
  );
};

WelcomeTour.displayName = 'WelcomeTour';
