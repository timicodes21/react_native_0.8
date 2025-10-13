import {
  font,
  SCREEN_HORIZONTAL_SPACING,
  SCREEN_WIDTH,
} from '@/app/constants/values';
import { stylesWithTheme } from '@/app/providers/theme';

export const chooseInterestsStyles = stylesWithTheme(theme => ({
  discoverContainer: {
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.grayBg,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: font.w(12),
    marginBottom: font.h(24),
  },
  selectedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: font.w(6),
    marginTop: font.h(2),
    borderColor: '#7F3DFF1A',
  },
  interestsContainer: {
    paddingHorizontal: theme.spacing.lg,
  },
  bottomContainer: {
    position: 'absolute',
    paddingHorizontal: SCREEN_HORIZONTAL_SPACING,
    width: SCREEN_WIDTH,
    backgroundColor: theme.colors.background,
    paddingTop: 10,
  },
  bottomTextContainer: {
    marginTop: font.h(12),
  },
}));
