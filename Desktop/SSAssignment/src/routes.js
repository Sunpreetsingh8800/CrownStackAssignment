import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './screens/home';
import Splash from './screens/splash';
import {SongDetailScreen} from './screens/songDetailScreen';

const createDefaultStackNavigator = (screensObject) =>
  createStackNavigator(screensObject, {
    headerMode: 'none',
    tabBarVisible: false,
    defaultNavigationOptions: {
      gestureEnabled: false,
    },
  });

const AppStack = createDefaultStackNavigator({
  Home: Home,
  SongDetailScreen: SongDetailScreen,
});

export const RootStack = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: Splash,
      Auth: AppStack,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);
