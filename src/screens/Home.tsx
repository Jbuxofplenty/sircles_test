import React, {useEffect, useState} from 'react';
import { FlatList, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useDispatch } from 'react-redux';

import { useTheme } from '../hooks';
import { IUser } from '../constants';
import { Block, UserCard } from '../components';
import { getUserData } from '../redux/actions/data';


const Home = (props) => {
  const [ users, setUsers ] = useState<IUser[]>([]);
  const { sizes } = useTheme();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(getUserData());
  }, []);

  const navigate = () => {
    navigation.navigate('User');
  }

  return (
    <View></View>
    // <Block>
    //   <FlatList
    //     data={users}
    //     showsVerticalScrollIndicator={false}
    //     keyExtractor={(item, index) => `${index}`}
    //     style={{paddingHorizontal: sizes.padding}}
    //     contentContainerStyle={{paddingBottom: sizes.l}}
    //     renderItem={({item, index}) => <UserCard {...item} onPress={navigate} />}
    //   />
    // </Block>
  );
};

export default Home;
