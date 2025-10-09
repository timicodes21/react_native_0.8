import { View, StyleSheet } from 'react-native';
import React from 'react';
import { font, FULL_WIDTH } from '@/app/constants/values';
import {
  Checkbox,
  shadowStyle,
  Surface,
  Typography,
} from '@/shared/components';
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
    <View style={[styles.container, styles.flex, shadowStyle]}>
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
          <Typography size="normal" weight="semi-bold" style={[styles.text]}>
            {title}
          </Typography>
          <Typography color="secondary" style={[styles.text]}>
            {text}
          </Typography>
        </View>
      </View>
      <Checkbox onChange={onChange} checked={!!active} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: font.w(16),
    justifyContent: 'space-between',
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: font.w(12),
  },
  text: {
    width: FULL_WIDTH - (48 + font.h(60)),
  },
});
