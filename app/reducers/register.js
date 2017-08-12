// @flow
import { UPDATE_STORE, GET_ALL } from '../actions/register';

export type entityStateType = {
  +entity: object
};

type actionType = {
  +type: string
};

const initialState = {
  serviceOrders: []
};

export default function register(state: serviceOrders = initialState, action: actionType) {
  switch (action.type) {
    case UPDATE_STORE: {
      return Object.assign({}, state, {
        serviceOrders: action.payload
      });
    }
    case GET_ALL : {
      return state;
    }
    default:
      return state;
  }
}
