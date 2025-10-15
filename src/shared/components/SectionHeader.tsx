// src/shared/components/SectionHeader.tsx
import React from 'react';
import { View, ViewStyle } from 'react-native';
import { Typography } from './Typography';
import { AppTheme, stylesWithTheme, useAppTheme } from '@/app/providers/theme';
import { font } from '@/app/constants/values';
import { ArrowRightIcon } from 'lucide-react-native';
import { AppTouchableOpacity } from './AppTouchableOpacity';

interface SectionHeaderProps {
  title: string;
  icon?: React.ReactNode;
  seeAllText?: string;
  onPressSeeAll?: () => void;
  showSeeAll?: boolean;
  style?: ViewStyle;
  mb?: keyof AppTheme['spacing'];
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  icon,
  seeAllText = 'See All',
  onPressSeeAll,
  showSeeAll = true,
  style,
  mb = 'lg',
}) => {
  const styles = useStyles();
  const { theme } = useAppTheme();

  return (
    <View
      style={[styles.container, { marginBottom: theme.spacing[mb] }, style]}>
      <View style={styles.leftSection}>
        {icon && <View style={styles.iconWrapper}>{icon}</View>}
        <Typography
          size="medium"
          weight="bold"
          color="main"
          style={styles.title}>
          {title}
        </Typography>
      </View>

      {showSeeAll && (
        <AppTouchableOpacity
          onPress={onPressSeeAll}
          hitSlop={10}
          style={[styles.rightSection]}>
          <Typography size="small" weight="semi-bold" color="primary">
            {seeAllText}
          </Typography>
          <ArrowRightIcon color={theme.colors.primary} size={font.w(14)} />
        </AppTouchableOpacity>
      )}
    </View>
  );
};

SectionHeader.displayName = 'SectionHeader';

const useStyles = stylesWithTheme(theme => ({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: font.h(16),
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    marginRight: font.w(8),
  },
  title: {
    color: theme.colors.main,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: font.w(4),
  },
}));
