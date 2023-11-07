import React from 'react';
import {Routes} from './Routes';
import {Home} from './MainNavigation';

import {createStackNavigator} from '@react-navigation/stack';
import IntroSlides from '../screens/IntroSlides/IntroSlides';

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
        headerShown: false,
      }}>
      <Stack.Screen name={Routes.IntroSlide} component={IntroSlides} />
      <Stack.Screen name={Routes.Home} component={Home} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
