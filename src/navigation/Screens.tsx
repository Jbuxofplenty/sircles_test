import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens';
import { useScreenOptions } from '../hooks';

const Stack = createStackNavigator();

export default () => {
  const screenOptions = useScreenOptions();
  return (
    <Stack.Navigator screenOptions={screenOptions.stack}>

      <Stack.Screen
        name="Home"
        component={Home}
        options={{title: 'Home'}}
      />
      
    </Stack.Navigator>
  );
};
