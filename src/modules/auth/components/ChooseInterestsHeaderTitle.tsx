import { View } from 'react-native';
import React from 'react';
import { Typography } from '@/shared/components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAppTheme } from '@/app/providers/theme';
import { font } from '@/app/constants/values';

export const ChooseInterestsHeaderTitle = () => {
  const { top } = useSafeAreaInsets();
  const { theme } = useAppTheme();
  return (
    <View
      style={{
        paddingTop: top + 10,
        paddingBottom: font.h(14),
        paddingHorizontal: theme.spacing.lg,
      }}>
      <Typography size="large" weight="semi-bold">
        Choose Your Interests
      </Typography>
      <Typography color="secondary">
        Select up to 12 areas of spiritual growth
      </Typography>
    </View>
  );
};
