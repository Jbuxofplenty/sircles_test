import React, { useState } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { navigationRef } from './RootNavigation';

import Menu from './Menu';
import { light } from '../constants';
import { ITheme } from '../constants/theme';

export default () => {
  const [theme, setTheme] = useState<ITheme>(light);
  
  // load custom fonts
  // const [fontsLoaded] = useFonts({
  //   'OpenSans-Light': theme.assets.OpenSansLight,
  //   'OpenSans-Regular': theme.assets.OpenSansRegular,
  //   'OpenSans-SemiBold': theme.assets.OpenSansSemiBold,
  //   'OpenSans-ExtraBold': theme.assets.OpenSansExtraBold,
  //   'OpenSans-Bold': theme.assets.OpenSansBold,
  // });

  const navigationTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      border: 'rgba(0,0,0,0)',
      text: String(theme.colors.text),
      card: String(theme.colors.card),
      primary: String(theme.colors.primary),
      notification: String(theme.colors.primary),
      background: String(theme.colors.background),
    },
  };
  
  return (
    <NavigationContainer ref={navigationRef} theme={navigationTheme}>
      <Menu />
    </NavigationContainer>
  );
};
