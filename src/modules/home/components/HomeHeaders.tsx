import { font } from '@/app/constants/values';
import { useAppTheme } from '@/app/providers/theme';
import {
  AppImage,
  AppTouchableOpacity,
  Surface,
  Typography,
} from '@/shared/components';
import { ProfileAvatarIcon } from '@/shared/icons';
import { BellRingIcon, SearchIcon } from 'lucide-react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PlanBadge from '@/app/assets/images/plan-badge.png';

export const HomeHeaderLeft = () => {
  const isPremium = true;
  return (
    <View style={[styles.container]}>
      <LinearGradient colors={['#646A77', '#464E5C']} style={[styles.gradient]}>
        <ProfileAvatarIcon />
      </LinearGradient>
      <View style={[styles.headerTitle]}>
        <Typography weight="semi-bold" size="small">
          Welcome, Blessing{' '}
        </Typography>
        <Surface
          style={[styles.planContainer]}
          height={22}
          width={isPremium ? 90 : 122}
          radius={5}
          color={isPremium ? 'primary' : 'secondary'}>
          <AppImage source={PlanBadge} containerStyle={[styles.image]} />
          <Typography size="small" weight="bold" color="primaryButtonText">
            {isPremium ? 'PREMIUM' : 'FREE ACCOUNT'}
          </Typography>
        </Surface>
      </View>
    </View>
  );
};

export const HomeHeaderRight = () => {
  const { theme } = useAppTheme();
  return (
    <View style={[styles.headerRightContainer]}>
      <AppTouchableOpacity accessibilityRole="link">
        <Surface radius={13} shadow borderColor="primary" borderWidth={0.85}>
          <SearchIcon size={20} color={theme.colors.secondary} />
        </Surface>
      </AppTouchableOpacity>
      <AppTouchableOpacity accessibilityRole="link">
        <Surface radius={13} shadow borderColor="primary" borderWidth={0.85}>
          <BellRingIcon
            size={20}
            color={theme.colors.secondary}
            fill={theme.colors.secondary}
          />
        </Surface>
      </AppTouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: SCREEN_HORIZONTAL_SPACING,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: font.w(10),
  },
  gradient: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerRightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: font.w(10),
  },
  headerTitle: {
    rowGap: 2,
  },
  planContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: font.w(4),
  },
  image: {
    width: 11.45,
    height: 12.8,
  },
});
