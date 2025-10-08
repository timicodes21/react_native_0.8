import { View, StyleSheet } from 'react-native';
import React from 'react';
import { AppLogoMark } from '@/shared/icons';
import { Typography } from '@/shared/components';

export const AuthScreenLogo = () => {
  return (
    <View style={[styles.container]}>
      <AppLogoMark width={45} height={45} />
      <View style={[styles.textContainer]}>
        <Typography fontFamily="proxima" size={13}>
          Femi Lazarus
        </Typography>
        <Typography size={13} weight="bold" fontFamily="proxima">
          Digital Library
        </Typography>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 4,
  },
  textContainer: {
    rowGap: -10,
  },
});
