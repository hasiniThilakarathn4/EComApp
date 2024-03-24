import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SCREENS from '../screens';
import {HomeNavigation} from './HomeNavigation';
import {CartNavigation} from './CartNavigation';
import {AppRoutes} from './AppRoutes';

const Tab = createBottomTabNavigator<any>();

enum ScreenOptions {
  HOME = 'Home',
  CART = 'Cart',
}

const TabMenu = () => {
  return (
    <Tab.Navigator initialRouteName={SCREENS.HOME_SCREEN}>
      <Tab.Screen name={ScreenOptions.HOME} component={HomeNavigation} />
      <Tab.Screen name={ScreenOptions.CART} component={CartNavigation} />
    </Tab.Navigator>
  );
};

export default TabMenu;
