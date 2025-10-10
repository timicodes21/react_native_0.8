import React from 'react';
import {
  AppScreen,
  AppScrollView,
  Surface,
  Typography,
} from '@/shared/components';
import {
  ChooseInterestsHeaderTitle,
  InterestItem,
} from '@/modules/auth/components';
import { View } from 'react-native';
import { chooseInterestsStyles } from '@/modules/auth/styles';
import { DiscoverIcon, HeartIcon } from '@/shared/icons';
import { interests, useChooseInterests } from '@/modules/auth/hooks';
import { useTranslation } from 'react-i18next';

export const ChooseInterests = () => {
  const styles = chooseInterestsStyles();
  const { handleChange, selectedInterests } = useChooseInterests();
  const { t } = useTranslation();

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
                0/12
              </Typography>
            </Surface>
          </View>
        </View>
        <View style={[styles.interestsContainer]}>
          {interests.map(item => (
            <InterestItem
              text={item?.description ?? ''}
              title={item?.title ?? ''}
              active={selectedInterests.includes(item?.id)}
              onChange={() => handleChange(item?.id)}
            />
          ))}
        </View>
      </AppScrollView>
    </AppScreen>
  );
};
