/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';

import AppNavigation from './navigation/AppNavigation';
import {Provider} from 'react-redux';
import {persistor, store} from './store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppNavigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
