import { View, StyleSheet } from 'react-native';
import React from 'react';
import { font, FULL_WIDTH } from '@/app/constants/values';
import { Checkbox, Surface, Typography } from '@/shared/components';
import { PrayerIcon } from '@/shared/icons';

interface IProps {
  title: string;
  text: string;
  active?: boolean;
  onChange: (value: boolean) => void;
}

export const InterestItem: React.FC<IProps> = ({
  title,
  text,
  active,
  onChange,
}) => {
  return (
    <Surface
      style={[styles.container, styles.flex]}
      shadow
      borderColor={active ? 'secondary' : 'background'}
      borderWidth={0.5}
      height={90}
      width={FULL_WIDTH}>
      <View style={[styles.flex]}>
        <Surface
          size={48}
          radius={14}
          shadow
          borderWidth={1}
          borderColor="primary">
          <PrayerIcon />
        </Surface>
        <View>
          <Typography
            size="normal"
            weight="semi-bold"
            style={[styles.text]}
            ellipsizeMode="tail">
            {title}
          </Typography>
          <Typography
            color="secondary"
            style={[styles.text]}
            ellipsizeMode="tail">
            {text}
          </Typography>
        </View>
      </View>
      <Checkbox onChange={onChange} checked={!!active} />
    </Surface>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: font.w(16),
    justifyContent: 'space-between',
    borderRadius: 16,
    marginBottom: 16,
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: font.w(12),
  },
  text: {
    width: FULL_WIDTH - (48 + font.h(80)),
  },
});
