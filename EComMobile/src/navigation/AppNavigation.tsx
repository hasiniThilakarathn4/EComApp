import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppRoutes} from './AppRoutes';
import TabMenu from './TabMenu';

export default () => {
  return (
    <NavigationContainer>
      <TabMenu />
    </NavigationContainer>
  );
};
