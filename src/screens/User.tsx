import React from 'react';
import { useNavigation } from '@react-navigation/core';

import { Block, Button, Image, Text, Divider } from '../components';
import { useTheme } from '../hooks';
import { IUser } from '../constants';

const User = (props) => {
  const user: IUser = props.route.params.user;
  const index: number = props.route.params.index;
  const { name, username, email, address, phone, website, company } = user;
  const navigation = useNavigation();
  const { icons, assets, colors, sizes, gradients } = useTheme();
  const cards = {
    0: assets.card1,
    1: assets.card2,
    2: assets.card3,
    3: assets.card4,
  }
  const card = cards[index % Object.keys(cards).length];

  const handleGoBack = () => {
    navigation.goBack();
  }

  return (
    <Block safe marginTop={sizes.md}>
      <Block
        keyboard
        keyboardShouldPersistTaps="always"
        paddingHorizontal={sizes.s}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: sizes.padding}}>
        <Block flex={0}>
          <Image
            background
            resizeMode="cover"
            padding={sizes.sm}
            paddingBottom={sizes.l}
            radius={sizes.cardRadius}
            source={card}>
            <Button
              row
              flex={0}
              justify="flex-start"
              onPress={handleGoBack}>
              <Image
                radius={0}
                width={10}
                height={18}
                color={colors.white}
                source={icons.arrow}
                transform={[{rotate: '180deg'}]}
              />
              <Text p white marginLeft={sizes.s}>
                {'Home'}
              </Text>
            </Button>
            <Block flex={0} align="center">
              <Text h3 center white>
                {name}
              </Text>
              <Text h5 center white marginBottom={sizes.md}>
                {company.name}
              </Text>
            </Block>
          </Image>

          {/*contact information */}
          <Block row align="center" justify="center" width="80%" alignSelf="center" marginTop={sizes.md}>
            <Text h5 semibold align="center">
              {'Contact Information'}
            </Text>
          </Block>
          <Block row align="center" alignSelf="center" width="80%" justify="space-between" marginVertical={sizes.sm}>
            <Text align="center">Email:</Text>
            <Text align="center">{email}</Text>
          </Block>
          <Block row align="center" alignSelf="center" width="80%" justify="space-between" marginBottom={sizes.sm}>
            <Text align="center">Phone:</Text>
            <Text align="center">{phone}</Text>
          </Block>
          <Divider />

          {/* address */}
          <Block row align="center" justify="center" width="80%" alignSelf="center" marginTop={sizes.sm}>
            <Text h5 semibold align="center">
              {'Address'}
            </Text>
          </Block>
          <Block row align="center" alignSelf="center" width="80%" justify="center" marginTop={sizes.sm}>
            <Text align="center">{address.street}</Text>
          </Block>
          <Block row align="center" alignSelf="center" width="80%" justify="center">
            <Text align="center">{address.suite}</Text>
          </Block>
          <Block row align="center" alignSelf="center" width="80%" justify="center" marginBottom={sizes.sm}>
            <Text align="center">{address.city}, {address.zipcode}</Text>
          </Block>
          <Divider />

          {/*other information */}
          <Block row align="center" justify="center" width="80%" alignSelf="center" marginTop={sizes.sm}>
            <Text h5 semibold align="center">
              {'Other Information'}
            </Text>
          </Block>
          <Block row align="center" alignSelf="center" width="80%" justify="space-between" marginVertical={sizes.sm}>
            <Text align="center">Username:</Text>
            <Text align="center">{username}</Text>
          </Block>
          <Block row align="center" alignSelf="center" width="80%" justify="space-between" marginBottom={sizes.sm}>
            <Text align="center">Website:</Text>
            <Text align="center">{website}</Text>
          </Block>
        </Block>
      </Block>
    </Block>
  );
};

export default User;
