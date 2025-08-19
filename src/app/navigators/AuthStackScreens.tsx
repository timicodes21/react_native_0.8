import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { AuthNavigationEnum, AuthStackParamsList } from './types/auth';
import { useTheme } from '../providers/theme';
import navStyles from './styles';
import Login from '@/screens/auth/Login';

const AuthStack = createNativeStackNavigator<AuthStackParamsList>();

const AuthStackScreens = () => {
  const { themeColors } = useTheme();
  const styles = navStyles(themeColors);

  return (
    <AuthStack.Navigator
      initialRouteName={AuthNavigationEnum.LOGIN}
      screenOptions={{
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitle,
        headerTitleAlign: 'center',
      }}>
      <AuthStack.Screen
        name={AuthNavigationEnum.LOGIN}
        component={Login}
        options={{
          headerShown: false,
          headerTitle: '',
        }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthStackScreens;
