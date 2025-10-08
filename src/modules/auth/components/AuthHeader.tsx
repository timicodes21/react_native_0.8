import { View, StyleSheet } from 'react-native';
import React from 'react';
import { font } from '@/app/constants/values';
import { Typography } from '@/shared/components';

interface IProps {
  headerText: string;
}

export const AuthHeader: React.FC<IProps> = ({ headerText }) => {
  return (
    <View>
      <Typography style={[styles.header]} weight="semi-bold" size="large">
        {headerText ?? ''}
      </Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: font.h(30),
    marginBottom: font.h(20),
  },
});
