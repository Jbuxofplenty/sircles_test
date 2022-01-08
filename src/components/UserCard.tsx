import React from 'react';
import { TouchableOpacity } from 'react-native';

import Block from './Block';
import Text from './Text';
import { IUser } from '../constants';
import { useTheme } from '../hooks/';

const UserCard = (props: IUser) => {
  const { firstName, lastName } = props;
  const { sizes } = useTheme();

  const CARD_WIDTH = (sizes.width - sizes.padding * 2 - sizes.sm) / 2;
  
  const navigate = () => {
    // navigation.navigate('Purchase', {...props});
  }

  return (
    <TouchableOpacity onPress={navigate}>
      <Block
        card
        flex={0}
        row
        marginBottom={sizes.sm}
        width={CARD_WIDTH * 2 + sizes.sm}>
        <Block
          paddingTop={sizes.s}
          justify="space-between"
          paddingLeft={sizes.sm}
          paddingBottom={sizes.s}>
          <Text p marginBottom={sizes.s}>
            {firstName}
          </Text>
          <Block row flex={0} align="center">
            <Text
              p
              semibold
              size={sizes.linkSize}
              marginRight={sizes.s}>
              {lastName}
            </Text>
          </Block>
        </Block>
      </Block>
    </TouchableOpacity>
  );
};

export default UserCard;
