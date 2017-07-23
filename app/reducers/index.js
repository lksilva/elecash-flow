// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import header from './header';

const rootReducer = combineReducers({
  counter,
  router,
  header,
});

export default rootReducer;
