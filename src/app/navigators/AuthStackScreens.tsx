import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import navStyles from './styles';
import { AuthNavigationEnum, AuthStackParamsList } from './types/auth';
import { Login, Splashscreen } from '@/screens/auth';
import { WelcomeTour } from '@/screens/auth/WelcomeTour';
import { AuthScreenLogo } from '@/modules/auth/components';

const AuthStack = createNativeStackNavigator<AuthStackParamsList>();

const AuthStackScreens = () => {
  const styles = navStyles();

  return (
    <AuthStack.Navigator
      initialRouteName={AuthNavigationEnum.SPLASHSCREEN}
      screenOptions={{
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitle,
        headerTitleAlign: 'center',
      }}>
      <AuthStack.Screen
        name={AuthNavigationEnum.LOGIN}
        component={Login}
        options={{
          headerTitle: '',
          headerRight: () => <AuthScreenLogo />,
        }}
      />
      <AuthStack.Screen
        name={AuthNavigationEnum.SPLASHSCREEN}
        component={Splashscreen}
        options={{
          headerShown: false,
          headerTitle: '',
        }}
      />
      <AuthStack.Screen
        name={AuthNavigationEnum.WELCOME_TOUR}
        component={WelcomeTour}
        options={{
          headerShown: false,
          headerTitle: '',
        }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthStackScreens;
