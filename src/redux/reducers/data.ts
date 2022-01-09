import {
  DATA_RESET,
  DATA_UPDATE_USERS,
} from '../constants/data';

import { IUser } from '../../constants';

export interface IDataReducer {
  /**
   * Array of users from the test API
   */
  users?: IUser[];
}

const INITIAL_STATE: IDataReducer = {
  users: [],
};

export function dataReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case DATA_RESET: {
      return {
        ...INITIAL_STATE,
      };
    }

    case DATA_UPDATE_USERS: {
      return {
        ...state,
        users: action.payload,
      };
    }

    default:
      return state;
  }
}
