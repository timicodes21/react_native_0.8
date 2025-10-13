import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeNavigationEnum, HomeStackParamsList } from './types/home';
import navStyles from './styles';
import { Home } from '@/screens/home';

const HomeStack = createNativeStackNavigator<HomeStackParamsList>();

const HomeStackScreens = () => {
  const styles = navStyles();

  return (
    <HomeStack.Navigator
      initialRouteName={HomeNavigationEnum.HOME}
      screenOptions={{
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitle,
        headerTitleAlign: 'center',
        headerShown: false,
      }}>
      <HomeStack.Screen
        name={HomeNavigationEnum.HOME}
        component={Home}
        options={{
          headerShown: false,
          headerTitle: '',
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreens;
