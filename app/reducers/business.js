// @flow
import { HANDLE_SUBMIT_BUSINESS, PAY, LIST_BUSINESS } from '../actions/business';
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
    case HANDLE_SUBMIT_BUSINESS: {
      const item = action.payload;
      const list = [...state.business, item];
      insertBusiness(item);
      return Object.assign({}, state, {
        business: list
      });
    }
    case PAY: {
      const list = state.business.map(b => {
        if (b.id === action.id) {
          b.paidDate = new Date().toISOString();
        }
        return b;
      });
      return Object.assign({}, state, {
        business: list
      });
    }
    case LIST_BUSINESS: {
      return Object.assign({}, state, {
        business: action.payload
      });
    }
    default:
      return state;
  }
}

function insertBusiness(item) {
  db.collection('business').insertOne({ item }, (err, result) => {
    console.log('Inserido um novo negócio', item);
  });
}
