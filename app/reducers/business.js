// @flow
import { PAY, LIST_BUSINESS } from '../actions/business';
import { remote } from 'electron';

const db = remote.getGlobal('db');

export type businessStateType = {
  +business: object
};

type actionType = {
  +type: string
};

const initialState = {
  business: []
};

export default function registerBusiness(state: business = initialState, action: actionType) {
  switch (action.type) {
    case LIST_BUSINESS: {
      return Object.assign({}, state, {
        business: action.payload
      });
    }
    default:
      return state;
  }
}
