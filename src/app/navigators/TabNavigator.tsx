import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import navStyles from './styles';
import { TabNavigatorEnum, TabNavigatorParamsList } from './types/tabs';
import HomeStackScreens from './HomeStackScreens';
import { BottomTabIcon } from '@/shared/components';
import {
  DownloadIcon,
  HomeIcon,
  LibraryIcon,
  ProfileIcon,
} from '@/shared/icons';
import {
  getFocusedRouteNameFromRoute,
  ParamListBase,
  Route,
  RouteProp,
} from '@react-navigation/native';
import { HomeNavigationEnum } from './types/home';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { font } from '../constants/values';

const Tab = createBottomTabNavigator<TabNavigatorParamsList>();

const getTabBarVisibility = (route: RouteProp<ParamListBase, string>) => {
  const routeName =
    getFocusedRouteNameFromRoute(route as Partial<Route<string>>) ??
    HomeNavigationEnum.HOME;

  // Show tab bar only on these screens
  const tabScreens: string[] = [HomeNavigationEnum.HOME];

  if (tabScreens.includes(routeName)) {
    return 'flex';
  }
  return 'none';
};

const TabNavigator = () => {
  const styles = navStyles();
  const { bottom } = useSafeAreaInsets();

  return (
    <Tab.Navigator
      initialRouteName={TabNavigatorEnum.HOME}
      screenOptions={({ route }) => {
        return {
          tabBarShowLabel: false,
          tabBarStyle: [
            styles.tabBarStyle,
            { marginBottom: bottom },
            { display: getTabBarVisibility(route) },
          ],
          tabBarIconStyle: {
            marginTop: font.h(14),
          },
          headerStyle: styles.header,
          headerTitleStyle: styles.headerTitle,
          tabBarHideOnKeyboard: true,
        };
      }}>
      <Tab.Screen
        name={TabNavigatorEnum.HOME}
        component={HomeStackScreens}
        options={() => {
          return {
            tabBarIcon: ({ focused }) => {
              return (
                <BottomTabIcon
                  focused={focused}
                  icon={<HomeIcon />}
                  focusedIcon={<HomeIcon color="primaryButtonText" />}
                  name="Home"
                />
              );
            },
            headerShown: false,
          };
        }}
      />
      <Tab.Screen
        name={TabNavigatorEnum.LIBRARY}
        component={HomeStackScreens}
        options={() => {
          return {
            tabBarIcon: ({ focused }) => {
              return (
                <BottomTabIcon
                  focused={focused}
                  icon={<LibraryIcon />}
                  focusedIcon={<LibraryIcon color="primaryButtonText" />}
                  name="Home"
                />
              );
            },
            headerShown: false,
          };
        }}
      />
      <Tab.Screen
        name={TabNavigatorEnum.DOWNLOADS}
        component={HomeStackScreens}
        options={() => {
          return {
            tabBarIcon: ({ focused }) => {
              return (
                <BottomTabIcon
                  focused={focused}
                  icon={<DownloadIcon />}
                  focusedIcon={<DownloadIcon color="primaryButtonText" />}
                  name="Home"
                />
              );
            },
            headerShown: false,
          };
        }}
      />
      <Tab.Screen
        name={TabNavigatorEnum.PROFILE}
        component={HomeStackScreens}
        options={() => {
          return {
            tabBarIcon: ({ focused }) => {
              return (
                <BottomTabIcon
                  focused={focused}
                  icon={<ProfileIcon />}
                  focusedIcon={<ProfileIcon color="primaryButtonText" />}
                  name="Home"
                />
              );
            },
            headerShown: false,
          };
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
