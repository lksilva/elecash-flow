// @flow
import { HANDLE_SUBMIT } from '../actions/register';

export type entityStateType = {
  +entity: object
};

type actionType = {
  +type: string
};

const initialState = {
  entity: {}
};

export default function register(state: entity = initialState, action: actionType) {
  switch (action.type) {
    case HANDLE_SUBMIT: {
      return state;
    }
    default:
      return state;
  }
}
