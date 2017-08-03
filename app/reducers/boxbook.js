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
      dateBoxBook: '14/08/2017',
      description: 'DESCRIPTION',
      input: 121,
      output: 2143,
    },
    {
      dateBoxBook: '14/08/2017',
      description: 'DESCRIPTION',
      input: 121,
      output: 2143,
    },
    {
      dateBoxBook: '14/08/2017',
      description: 'DESCRIPTION',
      input: 121,
      output: 2143,
    },
    {
      dateBoxBook: '14/08/2017',
      description: 'DESCRIPTION',
      input: 121,
      output: 2143,
    },
    {
      dateBoxBook: '14/08/2017',
      description: 'DESCRIPTION',
      input: 121,
      output: 2143,
    },
    {
      dateBoxBook: '14/08/2017',
      description: 'DESCRIPTION',
      input: 121,
      output: 2143,
    },
    {
      dateBoxBook: '14/08/2017',
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
        let item = action.payload;
        item.dateBoxBook = item.dateBoxBook.toLocaleString('pt-br').slice(0, 10);
        const list = [...state.boxBooks, item];
        return Object.assign({}, state, {
          boxBooks: list
        });
      }
      return state;
    }
    default:
      return state;
  }
}
