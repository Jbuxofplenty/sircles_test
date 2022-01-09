import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import Block from './Block';
import Text from './Text';
import { IUser } from '../constants';
import { useTheme } from '../hooks/';

const UserCard = ({ user, index }: {user: IUser, index: number}) => {
  const { name, email } = user;
  const { sizes, gradients } = useTheme();
  const navigation = useNavigation();
  const gradientList = {
    0: gradients.primary,
    1: gradients.secondary,
    2: gradients.tertiary,
    3: gradients.fourth,
    4: gradients.fifth,
    5: gradients.sixth,
  }
  const gradient = gradientList[index % Object.keys(gradientList).length];

  const CARD_WIDTH = (sizes.width - sizes.padding * 2 - sizes.sm) / 2;
  
  const navigate = () => {
    navigation.navigate('User', {user: {...user}, index: index});
  }

  return (
    <TouchableOpacity onPress={navigate}>
      <Block
        card
        flex={0}
        row
        marginBottom={sizes.sm}
        width={CARD_WIDTH * 2 + sizes.sm}
        black
        gradient={gradient}>
        <Block
          paddingTop={sizes.s}
          justify="space-between"
          paddingLeft={sizes.sm}
          paddingBottom={sizes.s}>
          <Text
            h4
            white
            marginBottom={sizes.s}
            align="center">
            {name}
          </Text>
          <Text
            h5
            white
            marginBottom={sizes.s}
            align="center">
            {email}
          </Text>
        </Block>
      </Block>
    </TouchableOpacity>
  );
};

export default UserCard;
