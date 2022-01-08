import React, { useCallback, useEffect, useRef } from 'react';
import { Animated, Linking, StyleSheet } from 'react-native';
import {
  useDrawerStatus,
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

import Screens from './Screens';
import { Block, Text, Button, Image } from '../components';
import { useTheme } from '../hooks';

const Drawer = createDrawerNavigator();

/* drawer menu screens navigation */
const ScreensStack = () => {
  const {colors} = useTheme();
  const isDrawerOpen = useDrawerStatus();
  const animation = useRef(new Animated.Value(0)).current;

  const scale = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.88],
  });

  const borderRadius = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 16],
  });

  const animatedStyle = {
    borderRadius: borderRadius,
    transform: [{scale: scale}],
  };

  useEffect(() => {
    Animated.timing(animation, {
      duration: 200,
      useNativeDriver: true,
      toValue: isDrawerOpen === "open" ? 1 : 0,
    }).start();
  }, [isDrawerOpen, animation]);

  return (
    <Animated.View
      style={StyleSheet.flatten([
        animatedStyle,
        {
          flex: 1,
          overflow: 'hidden',
          borderColor: colors.card,
          borderWidth: isDrawerOpen === "open" ? 1 : 0,
        },
      ])}>
      {/*  */}
      <Screens />
    </Animated.View>
  );
};

/* custom drawer menu */
const DrawerContent = (
  props: DrawerContentComponentProps,
) => {
  const { navigation } = props;
  const {icons, assets, colors, gradients, sizes} = useTheme();
  const labelColor = colors.text;
  const handleNavigation = useCallback(
    (to) => {
      navigation.navigate(to);
    },
    [navigation],
  );

  // screen list for Drawer menu
  const screens = 
  [
    {name: 'Home', to: 'Home', icon: icons.articles},
  ];

  return (
    <DrawerContentScrollView
      {...props}
      scrollEnabled
      removeClippedSubviews
      renderToHardwareTextureAndroid
      contentContainerStyle={{paddingBottom: sizes.padding}}>
      <Block paddingHorizontal={sizes.padding}>
        <Block flex={0} row align="center" marginTop={sizes.l}>
          <Block>
            <Text size={18} semibold>
              {'Mobile Test'}
            </Text>
          </Block>
        </Block>

        {screens?.map((screen, index) => {
          return (
            <Button
              row
              justify="flex-start"
              marginBottom={sizes.s}
              key={`menu-screen-${screen.name}-${index}`}
              onPress={() => handleNavigation(screen.to)}>
              <Block
                flex={0}
                radius={6}
                align="center"
                justify="center"
                width={sizes.md}
                height={sizes.md}
                marginRight={sizes.s}
                gradient={gradients['primary']}>
                <Image
                  radius={0}
                  width={14}
                  height={14}
                  source={screen.icon}
                  color={colors['white']}
                />
              </Block>
              <Text p semibold color={labelColor}>
                {screen.name}
              </Text>
            </Button>
          );
        })}

        <Block
          flex={0}
          height={1}
          marginRight={sizes.md}
          marginVertical={sizes.sm}
          gradient={gradients.menu}
        />

      </Block>
    </DrawerContentScrollView>
  );
};

/* drawer menu navigation */
export default (props) => {
  const { gradients } = useTheme();

  return (
    <Block gradient={gradients.light}>
      <Drawer.Navigator
        drawerContent={(props) => <DrawerContent {...props} />}
        backBehavior={"history"}
        screenOptions={{
          headerShown: false,
          overlayColor: "transparent",
          sceneContainerStyle: {
            backgroundColor: 'transparent'
          },
          drawerStyle: {
            flex: 1,
            width: '60%',
            borderRightWidth: 0,
            backgroundColor: 'transparent',
          }
        }}>
        <Drawer.Screen name="Screens">
          {props => <ScreensStack />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </Block>
  );
};
