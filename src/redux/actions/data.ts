import axios from 'axios';

import {
  DATA_RESET,
  DATA_UPDATE_USERS,
} from '../constants/data';

export const updateUsers = (users) => ({
  type: DATA_UPDATE_USERS,
  payload: users
});

export const reset = () => ({
  type: DATA_RESET,
});

export const getUserData = () => {
  return function(dispatch) {
    console.log('getting user data') 
    // let url = baseUrl + '/scale/getCurrentWeight';
    // console.log(url, macAddress)
    // let data = { macAddress };
    // let deviceConnected = await axios({
    //   method: 'post',
    //   url,
    //   data,
    //   responseType: 'text'
    // })
    // .then(function (response) {
    //   console.log(response.data);
    //   return true;
    // })
    // .catch((error) => {
    //   console.error(error);
    //   return false;
    // });
    // return deviceConnected;
  };
}