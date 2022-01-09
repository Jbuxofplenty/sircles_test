import React, {useEffect} from 'react';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { useTheme } from '../hooks';
import { IUser } from '../constants';
import { Block, UserCard } from '../components';
import { getUserData, dataReset } from '../redux/actions/data';
import { IReducer } from '../redux/reducers';


const Home = (props) => {
  const users: IUser[] = useSelector((state: IReducer) => state.data ? state.data.users : []);
  const { sizes } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData());
  }, []);
  return (
    <Block>
      <FlatList
        data={users}
        showsVerticalScrollIndicator={true}
        keyExtractor={(item, index) => `${index}`}
        style={{paddingHorizontal: sizes.padding}}
        contentContainerStyle={{paddingBottom: sizes.l, marginVertical: sizes.l}}
        renderItem={({item, index}: {item: IUser, index: number}) => <UserCard user={{...item}} index={index} />}
      />
    </Block>
  );
};

export default Home;
