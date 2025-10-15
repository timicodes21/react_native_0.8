import {
  HomeNavigationEnum,
  HomeScreenNavigationProps,
} from '@/app/navigators/types/home';
import { AppScreen, AppScrollView } from '@/shared/components';
import { homeStyles as styles } from '@/modules/home/styles';
import React from 'react';
import {
  AreasOfInterestSection,
  HomeAudioSection,
  HomeEbooksSection,
  HomeForYouSection,
  HomeUpdatesSlider,
  HomeVideoSection,
} from '@/modules/home/components';

export const Home: HomeScreenNavigationProps<HomeNavigationEnum.HOME> = () => {
  return (
    <AppScreen>
      <AppScrollView contentContainerStyle={[styles.container]} pb={100}>
        <HomeUpdatesSlider />
        <HomeForYouSection />
        <AreasOfInterestSection />
        <HomeEbooksSection />
        <HomeAudioSection />
        <HomeVideoSection />
      </AppScrollView>
    </AppScreen>
  );
};
