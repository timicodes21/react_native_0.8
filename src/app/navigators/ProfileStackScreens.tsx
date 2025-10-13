import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navStyles from './styles';
import { ProfileNavigationEnum, ProfileStackParamsList } from './types/profile';
import { Profile } from '@/screens/profile';

const ProfileStack = createNativeStackNavigator<ProfileStackParamsList>();

const ProfileStackScreens = () => {
  const styles = navStyles();

  return (
    <ProfileStack.Navigator
      initialRouteName={ProfileNavigationEnum.PROFILE}
      screenOptions={{
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitle,
        headerTitleAlign: 'center',
        headerShown: false,
      }}>
      <ProfileStack.Screen
        name={ProfileNavigationEnum.PROFILE}
        component={Profile}
        options={{
          headerShown: false,
          headerTitle: '',
        }}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileStackScreens;
