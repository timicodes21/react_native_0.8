import { StyleSheet, View } from 'react-native';
import React from 'react';
import { ContentCard, SectionHeader } from '@/shared/components';
import ThumbNailOne from '@/app/assets/images/home-thumbnail-1.png';
import { font, FULL_WIDTH } from '@/app/constants/values';
import { useAppTheme } from '@/app/providers/theme';
import { HeadphonesIcon, VideoIcon } from 'lucide-react-native';

export const HomeForYouSection = () => {
  const { theme } = useAppTheme();
  return (
    <View style={[styles.container]}>
      <SectionHeader title="For You" showSeeAll={false} />
      <ContentCard
        imageSource={ThumbNailOne}
        width={FULL_WIDTH}
        titleFontSize="medium"
        title="Message of the week"
        subtitle="4th week of Sept"
      />

      <View style={[styles.flexContainer]}>
        <ContentCard
          imageSource={ThumbNailOne}
          width={FULL_WIDTH / 2 - 8}
          title="Experience Light"
          titleFontSize="medium"
          subtitle="45 mins"
          leftIcon={
            <HeadphonesIcon
              size={font.h(15)}
              color={theme.colors.primaryButtonText}
            />
          }
        />

        <ContentCard
          imageSource={ThumbNailOne}
          width={FULL_WIDTH / 2 - 8}
          titleFontSize="medium"
          title="AFL Mentorship"
          subtitle="1h 15m"
          leftIcon={
            <VideoIcon
              size={font.h(15)}
              color={theme.colors.primaryButtonText}
            />
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginTop: 20,
  },
  flexContainer: {
    flexDirection: 'row',
    marginTop: 22,
    columnGap: 16,
  },
});
