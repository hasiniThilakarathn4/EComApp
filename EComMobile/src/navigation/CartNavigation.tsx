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

const Stack = createNativeStackNavigator<StackParams>();
const navigatorScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

export const CartNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={navigatorScreenOptions}
      initialRouteName={SCREENS.CART_SCREEN}>
      <Stack.Screen name={SCREENS.CART_SCREEN} component={Cart} />
      <Stack.Screen name={SCREENS.ITEM_DETAIL_SCREEN} component={ItemDetails} />
    </Stack.Navigator>
  );
};
