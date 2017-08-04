// @flow
import { HANDLE_SUBMIT_BOXBOOK } from '../actions/boxbook';

export type boxBookStateType = {
  +boxBooks: object
};

type actionType = {
  +type: string
};

const initialState = {
  boxBooks: [
    {
      dateBoxBook: '2017-08-14T03:00:00.000Z',
      description: 'DESCRIPTION',
      input: 121,
      output: 2143,
    },
    {
      dateBoxBook: '2017-08-14T03:00:00.000Z',
      description: 'DESCRIPTION',
      input: 121,
      output: 2143,
    },
    {
      dateBoxBook: '2017-08-14T03:00:00.000Z',
      description: 'DESCRIPTION',
      input: 121,
      output: 2143,
    },
    {
      dateBoxBook: '2017-08-14T03:00:00.000Z',
      description: 'DESCRIPTION',
      input: 121,
      output: 2143,
    },
    {
      dateBoxBook: '2017-08-30T03:00:00.000Z',
      description: 'DESCRIPTION',
      input: 121,
      output: 2143,
    },
    {
      dateBoxBook: '2017-08-30T03:00:00.000Z',
      description: 'DESCRIPTION',
      input: 121,
      output: 2143,
    },
    {
      dateBoxBook: '2017-08-30T03:00:00.000Z',
      description: 'DESCRIPTION',
      input: 121,
      output: 2143,
    },
  ]
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
    item.balance = balance;
    return item;
  });
}
