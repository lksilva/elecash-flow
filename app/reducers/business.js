// @flow
import { HANDLE_SUBMIT_BUSINESS } from '../actions/business';

export type businessStateType = {
  +business: object
};

type actionType = {
  +type: string
};

const initialState = {
  business: {}
};

export default function registerBusiness(state: business = initialState, action: actionType) {
  switch (action.type) {
    case HANDLE_SUBMIT_BUSINESS: {
      console.log(action.payload);
      return state;
    }
    default:
      return state;
  }
}
