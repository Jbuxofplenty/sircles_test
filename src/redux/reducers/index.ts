import { composeWithDevTools } from 'redux-devtools-extension';
import {
  applyMiddleware,
  combineReducers,
  createStore,
} from 'redux';
import ReduxThunk from 'redux-thunk';
import { dataReducer, IDataReducer } from './data';
import logger from 'redux-logger';

export interface IReducer {
  /**
   * Data Reducer
   */
  data?: IDataReducer;
}

const reducers = combineReducers({
  data: dataReducer,
});

const middleware = [ReduxThunk];

// For debugging purposes
// const middleware = [ReduxThunk, logger];

const store = createStore(
  reducers,
  {},
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
