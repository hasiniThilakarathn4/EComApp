import React from 'react';
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {StackParams} from '../types';
import Home from '../screens/Home';
import SCREENS from '../screens';
import ItemDetails from '../screens/ItemDetails';
import Cart from '../screens/Cart';
import TabMenu from './TabMenu';

const Stack = createNativeStackNavigator<StackParams>();
const navigatorScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

export const AppRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={navigatorScreenOptions}
      initialRouteName={SCREENS.HOME_SCREEN}>
      <Stack.Screen name={SCREENS.HOME_SCREEN} component={Home} />
      <Stack.Screen name={SCREENS.ITEM_DETAIL_SCREEN} component={ItemDetails} />
      <Stack.Screen name={SCREENS.CART_SCREEN} component={Cart} />
    </Stack.Navigator>
  );
};
