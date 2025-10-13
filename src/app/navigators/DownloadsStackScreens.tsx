import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navStyles from './styles';
import {
  DownloadsNavigationEnum,
  DownloadsStackParamsList,
} from './types/downloads';
import { Downloads } from '@/screens/downloads';

const DownloadsStack = createNativeStackNavigator<DownloadsStackParamsList>();

const DownloadsStackScreens = () => {
  const styles = navStyles();

  return (
    <DownloadsStack.Navigator
      initialRouteName={DownloadsNavigationEnum.DOWNLOADS}
      screenOptions={{
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitle,
        headerTitleAlign: 'center',
        headerShown: false,
      }}>
      <DownloadsStack.Screen
        name={DownloadsNavigationEnum.DOWNLOADS}
        component={Downloads}
        options={{
          headerShown: false,
          headerTitle: '',
        }}
      />
    </DownloadsStack.Navigator>
  );
};

export default DownloadsStackScreens;
