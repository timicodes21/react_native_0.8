import { font, FULL_WIDTH } from '@/app/constants/values';
import { stylesWithTheme } from '@/app/providers/theme';

export const welcomeTourStyles = stylesWithTheme(theme => ({
  container: {},
  contentCard: {
    marginHorizontal: theme.spacing.lg,
    position: 'absolute',
    bottom: 0,
    width: FULL_WIDTH,
    height: 300,
    // backgroundColor: theme.colors.background,
    borderRadius: 20,
    paddingTop: 30,
    paddingBottom: 20,
  },
  contentCon: {
    paddingHorizontal: font.w(20),
  },
  text: {
    color: '#FFFFFF',
  },
  hightLightText: {
    color: '#FFFFFF',
    marginVertical: font.h(10),
    lineHeight: 40,
  },
  bottomItems: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));
