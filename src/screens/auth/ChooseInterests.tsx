import { useAppTheme } from '@/app/providers/theme';
import {
  ChooseInterestsHeaderTitle,
  InterestItem,
} from '@/modules/auth/components';
import { interests, useChooseInterests } from '@/modules/auth/hooks';
import { chooseInterestsStyles } from '@/modules/auth/styles';
import {
  AppButton,
  AppScreen,
  AppScrollView,
  Surface,
  Typography,
} from '@/shared/components';
import { DiscoverIcon, HeartIcon, PrayerIcon } from '@/shared/icons';
import { ArrowRightIcon } from 'lucide-react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const ChooseInterests = () => {
  const styles = chooseInterestsStyles();
  const { handleChange, selectedInterests } = useChooseInterests();
  const { t } = useTranslation();
  const { bottom } = useSafeAreaInsets();
  const { theme } = useAppTheme();

  return (
    <AppScreen>
      <AppScrollView noHorizontalPadding>
        <ChooseInterestsHeaderTitle />

        <View style={[styles.discoverContainer]}>
          <Surface color="primary" size={48} radius={12} shadow>
            <DiscoverIcon />
          </Surface>
          <View>
            <Typography weight="semi-bold" size="normal">
              {t('interestsSelection.discoveryCardTitle')}
            </Typography>
            <Surface
              style={[styles.selectedContainer]}
              radius={99}
              height={27}
              width={68}
              shadow
              borderWidth={1}
              borderColor="primary">
              <HeartIcon />
              <Typography size="small" weight="medium">
                {selectedInterests.length}/12
              </Typography>
            </Surface>
          </View>
        </View>
        <View style={[styles.interestsContainer]}>
          {interests.map(item => (
            <InterestItem
              text={item?.description ?? ''}
              icon={
                <Surface
                  size={48}
                  radius={14}
                  shadow
                  borderWidth={1}
                  borderColor="primary">
                  <PrayerIcon />
                </Surface>
              }
              key={item?.id}
              title={item?.title ?? ''}
              active={selectedInterests.includes(item?.id)}
              onChange={() => handleChange(item?.id)}
            />
          ))}
        </View>
      </AppScrollView>
      <View
        style={[
          styles.bottomContainer,
          { bottom: 0, paddingBottom: bottom + 10 },
        ]}>
        <AppButton
          rightIcon={
            <ArrowRightIcon color={theme.colors.primaryButtonText} size={20} />
          }>
          {t('interestsSelection.buttonText')}
        </AppButton>
        <Typography size="small" style={[styles.bottomTextContainer]} center>
          {t('interestsSelection.skipTextPrefix')}?
          <Typography
            size="small"
            weight="semi-bold"
            color="primary"
            onPress={() => {}}>
            {' '}
            {t('interestsSelection.skipTextLink')}
          </Typography>
        </Typography>
      </View>
    </AppScreen>
  );
};
