import { stylesWithTheme } from '../providers/theme';
import { font, SCREEN_HORIZONTAL_SPACING } from '../constants/values';

const navStyles = stylesWithTheme(theme => ({
  header: {
    backgroundColor: theme.colors.background,
    elevation: 0, // Remove shadow on Android
    shadowOpacity: 0, // Remove shadow on iOS
  },
  headerTitle: {
    color: theme.colors.main,
    fontSize: 18,
    fontFamily: 'OpenSans-Medium',
  },
  tabBarStyle: {
    position: 'absolute',
    backgroundColor: theme.colors.background,
    borderRadius: 24,
    height: font.h(65),
    justifyContent: 'center',
    marginHorizontal: SCREEN_HORIZONTAL_SPACING,
    alignItems: 'center',

    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.08,
    shadowRadius: 10,

    // Android shadow
    elevation: 5,
  },
  tabHeaderTitle: {
    fontSize: 30,
    fontFamily: 'Sora-ExtraBold',
    color: theme.colors.main,
  },
}));

export default navStyles;
