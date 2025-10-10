import { View } from 'react-native';
import React from 'react';
import { Typography } from '@/shared/components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAppTheme } from '@/app/providers/theme';
import { font } from '@/app/constants/values';
import { useTranslation } from 'react-i18next';

export const ChooseInterestsHeaderTitle = () => {
  const { top } = useSafeAreaInsets();
  const { theme } = useAppTheme();
  const { t } = useTranslation();
  return (
    <View
      style={{
        paddingTop: top + 10,
        paddingBottom: font.h(14),
        paddingHorizontal: theme.spacing.lg,
      }}>
      <Typography size="large" weight="semi-bold">
        {t('interestsSelection.title')}
      </Typography>
      <Typography color="secondary">
        {t('interestsSelection.subtitle')}
      </Typography>
    </View>
  );
};
