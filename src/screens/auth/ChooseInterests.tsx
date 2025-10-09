import React, { useState } from 'react';
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

export const ChooseInterests = () => {
  const styles = chooseInterestsStyles();
  const [checked, setChecked] = useState(false);

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
              Discover What Drives You
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
          <InterestItem
            text="Supernatural healing testimonies"
            title="Divine Healing"
            active={checked}
            onChange={() => setChecked(prev => !prev)}
          />
        </View>
      </AppScrollView>
    </AppScreen>
  );
};
