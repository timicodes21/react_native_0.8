import { View } from 'react-native';
import React from 'react';
import { stylesWithTheme } from '@/app/providers/theme';
import { AppImage } from '@/shared/components';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@/app/constants/values';
import { Source } from 'react-native-fast-image';

const useStyles = stylesWithTheme(theme => ({
  container: {
    position: 'relative',
  },
  image: {
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
  },
}));

interface IProps {
  image: Source;
}

export const WelcomeTourItem: React.FC<IProps> = ({ image }) => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <AppImage source={image} containerStyle={styles.image} />
    </View>
  );
};

WelcomeTourItem.displayName = 'WelcomeTourItem';
