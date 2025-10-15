import { font } from '@/app/constants/values';
import { useAppTheme } from '@/app/providers/theme';
import { SectionHeader, Surface, Typography } from '@/shared/components';
import { PrayerIcon } from '@/shared/icons';
import { LibraryIcon } from 'lucide-react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export const AreasOfInterestSection = () => {
  const { theme } = useAppTheme();
  return (
    <View style={[styles.container]}>
      <SectionHeader
        title="Areas of Interest"
        icon={<LibraryIcon strokeWidth={2} color={theme.colors.main} />}
      />
      <View style={[styles.flexContainer]}>
        {['Healing', 'Prayer Life', 'Miracles', 'Breakthrough'].map(item => (
          <View style={[styles.interestItem]} key={item}>
            <Surface
              size={font.h(64)}
              radius={14}
              shadow
              borderWidth={1}
              borderColor="primary">
              <PrayerIcon width={28} height={28} />
            </Surface>
            <Typography
              weight="semi-bold"
              style={[styles.interestText]}
              ellipsizeMode="tail">
              {item}
            </Typography>
          </View>
        ))}
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
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginTop: 22,
  },
  interestItem: {
    alignItems: 'center',
  },
  interestText: {
    marginTop: 8,
  },
});
