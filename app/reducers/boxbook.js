// @flow
import { HANDLE_SUBMIT_BOXBOOK, LIST_BOXBOOK } from '../actions/boxbook';

export type boxBookStateType = {
  +boxBooks: object
};

type actionType = {
  +type: string
};

const initialState = {
  boxBooks: []
};

export default function handleBoxBooks(state: boxBooks = initialState, action: actionType) {
  switch (action.type) {
    case HANDLE_SUBMIT_BOXBOOK: {
      if (action.payload.isData) {
        const item = action.payload;
        const list = [...state.boxBooks, item];
        return Object.assign({}, state, {
          boxBooks: getBalanceList(list)
        });
      }
      return state;
    }
    case LIST_BOXBOOK: {
      return Object.assign({}, state, {
        boxBooks: getBalanceList(action.payload)
      });
    }
    default:
      return Object.assign({}, state, {
        boxBooks: getBalanceList(state.boxBooks)
      });
  }
}

function getBalanceList(list) {
  let balance = 0;
  return list.map(item => {
    balance += item.input - item.output;
    item.balance = balance.toFixed(2);
    return item;
  });
}
