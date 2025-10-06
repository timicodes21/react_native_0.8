import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import navStyles from './styles';
import { AuthNavigationEnum, AuthStackParamsList } from './types/auth';
import { Login } from '@/screens/auth';

const AuthStack = createNativeStackNavigator<AuthStackParamsList>();

const AuthStackScreens = () => {
  const styles = navStyles();

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
