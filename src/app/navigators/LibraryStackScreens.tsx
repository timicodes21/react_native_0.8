import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navStyles from './styles';
import { LibraryNavigationEnum, LibraryStackParamsList } from './types/library';
import { Library } from '@/screens/library';

const LibraryStack = createNativeStackNavigator<LibraryStackParamsList>();

const LibraryStackScreens = () => {
  const styles = navStyles();

  return (
    <LibraryStack.Navigator
      initialRouteName={LibraryNavigationEnum.LIBRARY}
      screenOptions={{
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitle,
        headerTitleAlign: 'center',
        headerShown: false,
      }}>
      <LibraryStack.Screen
        name={LibraryNavigationEnum.LIBRARY}
        component={Library}
        options={{
          headerShown: false,
          headerTitle: '',
        }}
      />
    </LibraryStack.Navigator>
  );
};

export default LibraryStackScreens;
