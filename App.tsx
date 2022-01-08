import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';

import AppNavigation from './src/navigation/App';
import store from './src/redux/reducers';



export default function App() {
  return (
    <Provider store={store}>
        <AppNavigation />
    </Provider>
  );
}