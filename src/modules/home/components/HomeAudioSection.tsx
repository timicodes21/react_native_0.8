import BookOne from '@/app/assets/images/book-thumbnail-1.png';
import BookTwo from '@/app/assets/images/book-thumbnail-2.png';
import BookThree from '@/app/assets/images/book-thumbnail-3.png';
import BookFour from '@/app/assets/images/book-thumbnail-4.png';
import { font } from '@/app/constants/values';
import { useAppTheme } from '@/app/providers/theme';
import { ContentCard, SectionHeader } from '@/shared/components';
import { HeadphonesIcon } from 'lucide-react-native';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

export const HomeAudioSection = () => {
  const { theme } = useAppTheme();
  return (
    <View style={[styles.container]}>
      <SectionHeader
        title="Audio"
        icon={<HeadphonesIcon strokeWidth={2} color={theme.colors.main} />}
      />
      <ScrollView
        horizontal
        contentContainerStyle={[styles.scroll]}
        showsHorizontalScrollIndicator={false}>
        <ContentCard
          imageSource={BookFour}
          width={font.w(160)}
          height={font.h(127)}
          contentType="book"
          title="Possessing the gates of the Enemy"
          leftIcon={
            <HeadphonesIcon
              size={font.h(15)}
              color={theme.colors.primaryButtonText}
            />
          }
        />

        <ContentCard
          imageSource={BookTwo}
          width={font.w(160)}
          height={font.h(127)}
          title="The Man of the Spirit"
          leftIcon={
            <HeadphonesIcon
              size={font.h(15)}
              color={theme.colors.primaryButtonText}
            />
          }
        />

        <ContentCard
          imageSource={BookThree}
          width={font.w(160)}
          height={font.h(127)}
          title="The Other side of Mercy"
          leftIcon={
            <HeadphonesIcon
              size={font.h(15)}
              color={theme.colors.primaryButtonText}
            />
          }
        />

        <ContentCard
          imageSource={BookOne}
          width={font.w(160)}
          height={font.h(127)}
          title="Be Different"
          leftIcon={
            <HeadphonesIcon
              size={font.h(15)}
              color={theme.colors.primaryButtonText}
            />
          }
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginTop: 20,
  },
  scroll: {
    columnGap: font.w(16),
  },
});
