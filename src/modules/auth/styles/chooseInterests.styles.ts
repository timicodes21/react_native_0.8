import { font } from '@/app/constants/values';
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
}));
