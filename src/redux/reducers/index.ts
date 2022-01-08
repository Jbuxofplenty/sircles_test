import { composeWithDevTools } from 'redux-devtools-extension';
import {
  applyMiddleware,
  combineReducers,
  createStore,
} from 'redux';
import ReduxThunk from 'redux-thunk';
import dataReducer from './data';
import logger from 'redux-logger';

const reducers = combineReducers({
  data: dataReducer,
});

// const middleware = [ReduxThunk];

// For debugging purposes
const middleware = [ReduxThunk, logger];

const store = createStore(
  reducers,
  {},
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
