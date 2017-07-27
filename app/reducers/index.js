// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import header from './header';
import register from './register';
import { reducer as reduxFormReducer } from 'redux-form';

const rootReducer = combineReducers({
  counter,
  router,
  header,
  register,
  form: reduxFormReducer,
});

export default rootReducer;
