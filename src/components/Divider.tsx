import React from 'react';

import { useTheme } from '../hooks/';
import Block from './Block';

const Divider = () => {
  const { gradients, sizes } = useTheme();

  return (
    <Block
      row
      flex={0}
      align="center"
      justify="center"
      alignSelf="center"
      width="100%"
      marginVertical={sizes.sm}
      paddingHorizontal={sizes.xxl}>
      <Block
        flex={0}
        height={1}
        width="50%"
        end={{x: 1, y: 0}}
        start={{x: 0, y: 1}}
        gradient={gradients.divider}
      />
      <Block
        flex={0}
        height={1}
        width="50%"
        start={{x: 1, y: 0}}
        end={{x: 0, y: 0}}
        gradient={gradients.divider}
      />
    </Block>
  );
};

export default Divider;
