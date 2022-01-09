import axios from 'axios';

import {
  DATA_RESET,
  DATA_UPDATE_USERS,
} from '../constants/data';

import { IUser } from '../../constants';

const baseUrl = 'https://jsonplaceholder.typicode.com';

export const updateUsers = (users) => ({
  type: DATA_UPDATE_USERS,
  payload: users
});

export const dataReset = () => ({
  type: DATA_RESET,
});

export const getUserData = () => {
  return async function(dispatch) {
    let url = baseUrl + '/users';
    await axios.get<IUser[]>(url)
      .then(function (response) {
        if(response.data && response.data.length) dispatch(updateUsers(response.data));
        return true;
      })
      .catch((error) => {
        console.error(error);
        return false;
      });
  };
}