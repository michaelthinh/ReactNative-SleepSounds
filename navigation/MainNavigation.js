import React from 'react';

import {Routes} from './Routes';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Sleep from '../screens/Sleep/Sleep';
import Composer from '../screens/Composer/Composer';
import Profile from '../screens/Profile/Profile';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUser, faMusic, faMoon} from '@fortawesome/free-solid-svg-icons';

import {useTheme} from 'react-native-paper';

const Tab = createMaterialBottomTabNavigator();

export const Home = () => {
  const theme = useTheme();
  theme.colors.secondaryContainer = 'transparent';
  return (
    <Tab.Navigator
      shifting={true}
      labeled={true}
      activeColor="#4870FF"
      barStyle={{backgroundColor: '#21283F'}}
      screenOptions={{
        header: () => null,
        headerShown: false,
      }}>
      <Tab.Screen
        name={Routes.Sleep}
        component={Sleep}
        options={{
          tabBarColor: 'transparent',
          tabBarLabel: Routes.Sleep,
          tabBarIcon: ({focused}) => (
            <FontAwesomeIcon
              icon={faMoon}
              color={focused ? '#4870FF' : '#C3C3C3'}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.Composer}
        component={Composer}
        options={{
          tabBarColor: 'transparent',
          tabBarLabel: Routes.Composer,
          tabBarIcon: ({focused}) => (
            <FontAwesomeIcon
              icon={faMusic}
              color={focused ? '#4870FF' : '#C3C3C3'}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.Profile}
        component={Profile}
        options={{
          tabBarColor: 'red',
          tabBarLabel: Routes.Profile,
          tabBarIcon: ({focused}) => (
            <FontAwesomeIcon
              icon={faUser}
              color={focused ? '#4870FF' : '#C3C3C3'}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
