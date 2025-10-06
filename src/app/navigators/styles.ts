import { Platform, StyleSheet } from 'react-native';
import { AppTheme } from '../providers/theme';

const navStyles = (theme: AppTheme['colors']) => {
  return StyleSheet.create({
    header: {
      backgroundColor: theme.background,
      elevation: 0, // Remove shadow on Android
      shadowOpacity: 0, // Remove shadow on iOS
    },
    headerTitle: {
      color: theme.main,
      fontSize: 18,
      fontFamily: 'Aeonik-Medium',
    },
    tabBarStyle: {
      paddingTop: 14,
      paddingBottom: 20,
      height: Platform.select({ ios: 75, android: 60 }),
      // paddingHorizontal: 5,
      backgroundColor: theme.inputBg,
      borderTopEndRadius: 20,
      borderTopStartRadius: 20,
      overflow: 'hidden',
      borderWidth: 0,
      borderTopWidth: 0,
      marginTop: -20,
    },
    tabHeaderTitle: {
      fontSize: 30,
      fontFamily: 'Sora-ExtraBold',
      color: theme.main,
    },
  });
};

export default navStyles;
