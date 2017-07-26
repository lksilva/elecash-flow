// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import header from './header';
import register from './register';

const rootReducer = combineReducers({
  counter,
  router,
  header,
  register,
});

export default rootReducer;
