import WelcomeImage from '@/app/assets/images/welcome-tour-one.png';
import WelcomeImageThree from '@/app/assets/images/welcome-tour-three.png';
import WelcomeImageTwo from '@/app/assets/images/welcome-tour-two.png';
import { TOUCH_OPACITY } from '@/app/constants/values';
import {
  AuthNavigationEnum,
  AuthScreenNavigationProps,
} from '@/app/navigators/types/auth';
import { AppLanguage } from '@/app/providers/i18n/i18n';
import {
  InterestItem,
  SlideIndicator,
  WelcomeTourBlur,
  WelcomeTourItem,
} from '@/modules/auth/components';
import { useWelcomeTour } from '@/modules/auth/hooks';
import { welcomeTourStyles } from '@/modules/auth/styles';
import {
  AppBottomSheet,
  AppButton,
  AppScreen,
  AppTouchableOpacity,
  Surface,
  Typography,
} from '@/shared/components';
import { LanguagesIcon } from 'lucide-react-native';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface ILanguage {
  title: string;
  text: string;
  flag: string;
  id: AppLanguage;
}

const languages: ILanguage[] = [
  {
    title: 'English',
    text: 'English • United States',
    flag: '🇺🇸',
    id: 'en',
  },
  {
    title: 'Español',
    text: 'Spanish • Spain',
    flag: '🇪🇸',
    id: 'es',
  },
  {
    title: 'Français',
    text: 'French • France',
    flag: '🇫🇷',
    id: 'fr',
  },
];

export const WelcomeTour: AuthScreenNavigationProps<
  AuthNavigationEnum.WELCOME_TOUR
> = () => {
  const styles = welcomeTourStyles();
  const { t } = useTranslation();

  const data = [
    {
      image: WelcomeImage,
      title: t('welcomeTour.audioTitle'),
      highlight: t('welcomeTour.audioHeadline'),
      content: t('welcomeTour.audioDescription'),
    },
    {
      image: WelcomeImageTwo,
      title: t('welcomeTour.videoTitle'),
      highlight: t('welcomeTour.videoHeadline'),
      content: t('welcomeTour.audioDescription'),
    },
    {
      image: WelcomeImageThree,
      title: t('welcomeTour.videoTitle'),
      highlight: t('welcomeTour.ebooksHeadline'),
      content: t('welcomeTour.audioDescription'),
    },
  ];

  const {
    handleNext,
    handleOnScroll,
    scrollX,
    scrollRef,
    handleOnViewableItemsChanged,
    viewabliltyConfig,
    index,
    handleSkip,
    selectedLanguage,
    handleLanguageChange,
    saveLanguage,
    openDrawer,
    bottomSheetModalRef,
    snapPoints,
  } = useWelcomeTour(data);

  const { bottom } = useSafeAreaInsets();

  useEffect(() => {
    openDrawer();
  }, []);

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
                {t('welcomeTour.skip')}
              </Typography>
            </AppTouchableOpacity>
            <SlideIndicator data={[1, 2, 3]} scrollX={scrollX} />
            <AppTouchableOpacity
              activeOpacity={TOUCH_OPACITY}
              onPress={handleNext}>
              <Typography style={[styles.text]} weight="medium">
                {t('welcomeTour.next')}
              </Typography>
            </AppTouchableOpacity>
          </View>
        </View>
      </WelcomeTourBlur>
      <AppBottomSheet
        ref={bottomSheetModalRef}
        enablePanDownToClose={false}
        dismissOnBackdropPress={false}
        scrollable
        showCloseIcon
        snapPoints={snapPoints}>
        <View style={[styles.bottomSheetHeader]}>
          <Surface
            size={32}
            color={!selectedLanguage ? 'primaryBtnDisabled' : 'primary'}
            radius={12}>
            <LanguagesIcon color="#FFFFFF" size={16} />
          </Surface>
          <View>
            <Typography weight="bold" size="medium">
              Language & Region
            </Typography>
            <Typography color="secondary">Choose your language</Typography>
          </View>
        </View>
        <View style={[styles.languageContainer]}>
          {languages?.map(item => (
            <InterestItem
              key={item?.id}
              icon={<Typography>{item?.flag}</Typography>}
              title={item?.title}
              text={item?.text}
              active={selectedLanguage === item?.id}
              onChange={value => handleLanguageChange(value, item?.id)}
            />
          ))}
        </View>
        <View style={[styles.bottomContainer, { bottom: bottom + 10 }]}>
          <AppButton disabled={!selectedLanguage} onPress={saveLanguage}>
            Save
          </AppButton>
        </View>
      </AppBottomSheet>
    </AppScreen>
  );
};

WelcomeTour.displayName = 'WelcomeTour';
