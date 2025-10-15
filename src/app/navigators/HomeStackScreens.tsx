import { HomeHeaderLeft, HomeHeaderRight } from '@/modules/home/components';
import { Home } from '@/screens/home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navStyles from './styles';
import { HomeNavigationEnum, HomeStackParamsList } from './types/home';

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
          headerShown: true,
          headerTitle: '',
          headerLeft: () => <HomeHeaderLeft />,
          headerRight: () => <HomeHeaderRight />,
          headerTitleAlign: 'left',
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreens;
