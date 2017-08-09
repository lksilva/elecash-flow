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
    case PAY: {
      const list = state.business.map(b => {
        if (b.id === action.id) {
          b.paidDate = new Date();
        }
        return b;
      });
      return Object.assign({}, state, {
        business: list
      });
    }
    case LIST_BUSINESS: {
      return Object.assign({}, state, {
        business: action.payload.map(value => {
          let { item } = value;
          item.id = value._id.toString();
          return item;
        })
      });
    }
    default:
      return state;
  }
}
