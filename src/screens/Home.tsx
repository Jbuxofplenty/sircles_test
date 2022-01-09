import React, {useEffect} from 'react';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { useTheme, useOrientation } from '../hooks';
import { IUser } from '../constants';
import { Block, UserCard } from '../components';
import { getUserData, dataReset } from '../redux/actions/data';
import { IReducer } from '../redux/reducers';

const Home = (props) => {
  const users: IUser[] = useSelector((state: IReducer) => state.data ? state.data.users : []);
  const { sizes } = useTheme();
  const dispatch = useDispatch();
  const orientation = useOrientation();
  const landscape = orientation == 'PORTRAIT' ? false : true;

  useEffect(() => {
    dispatch(getUserData());
  }, []);

  return (
    <Block>
      <FlatList
        numColumns={landscape ? 2 : 1}
        key={(landscape ? 'h' : 'v')}
        data={users}
        showsVerticalScrollIndicator={true}
        keyExtractor={(item, index) => `${index}`}
        style={{paddingHorizontal: sizes.s}}
        contentContainerStyle={{paddingBottom: sizes.l, marginVertical: sizes.l}}
        renderItem={({item, index}: {item: IUser, index: number}) => <UserCard user={{...item}} index={index} />}
      />
    </Block>
  );
};

export default Home;
