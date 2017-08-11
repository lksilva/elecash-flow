// @flow
import { LIST_BUSINESS } from '../actions/business';
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
        business: highlightedLate(action.payload)
      });
    }
    default:
      return state;
  }
}

function highlightedLate(list) {
  const today = new Date();
  today.setHours(23, 59, 59, 999);
  return list.map(item => {
    if (!item.paidDate && new Date(item.billingDate) < today) {
      item.isLate = true;
    }
    return item;
  });
}
