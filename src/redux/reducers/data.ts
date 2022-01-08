import {
  DATA_RESET,
  DATA_UPDATE_USERS,
} from '../constants/data';

const INITIAL_STATE = {
  users: {},
};

export default function (state = INITIAL_STATE, action) {
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
