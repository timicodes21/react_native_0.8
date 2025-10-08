import { font } from '@/app/constants/values';
import { StyleSheet } from 'react-native';

export const loginStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  bottomTextContainer: {
    marginTop: font.h(12),
  },
  forgotPasswordText: {
    textAlign: 'right',
    marginTop: font.h(6),
  },
  continueWithContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: font.w(10),
  },
  line: {
    borderTopWidth: 0.6,
    flexGrow: 1,
  },
  socialIconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: font.w(20),
    marginTop: font.h(20),
  },
});
