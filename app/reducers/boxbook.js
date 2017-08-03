// @flow
import { HANDLE_SUBMIT_BOXBOOK } from '../actions/boxbook';

export type boxBookStateType = {
  +boxBooks: object
};

type actionType = {
  +type: string
};

const initialState = {
  boxBooks: {}
};

export default function handleBoxBooks(state: boxBooks = initialState, action: actionType) {
  switch (action.type) {
    case HANDLE_SUBMIT_BOXBOOK: {
      return state;
    }
    default:
      return state;
  }
}
