import React from 'react';
import {
  createNavigationContainerRef,
  NavigationContainer,
  ParamListBase,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootNavigatorEnum, RootStackParamsList } from './types/root';
import TabNavigator from './TabNavigator';

type NavigationParams = ParamListBase;
const navigationRef = createNavigationContainerRef<NavigationParams>();
const Stack = createNativeStackNavigator<RootStackParamsList>();

const AppNavigationContainer = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false, // Hide the header
          animation: 'slide_from_bottom',
        }}>
        {/* <Stack.Screen
          name={RootNavigatorEnum.AUTH}
          component={AuthStackScreens}
        /> */}
        <Stack.Screen name={RootNavigatorEnum.AUTH} component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigationContainer;
