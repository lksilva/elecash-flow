// @flow
import { HANDLE_SUBMIT_BUSINESS } from '../actions/business';

export type businessStateType = {
  +business: object
};

type actionType = {
  +type: string
};

const initialState = {
  business: [
    { clientName: 'LUCAS SILVA SOUZA',
      dateRB: '2017-08-16T03:00:00.000Z',
      price: '12',
      billingDate: '2017-08-30T03:00:00.000Z',
      paidDate: '2017-08-12T03:00:00.000Z',
      typePayment: 'DINHEIRO' },
    { clientName: 'LUCAS SILVA SOUZA',
      dateRB: '2017-08-16T03:00:00.000Z',
      price: '12',
      billingDate: '2017-08-30T03:00:00.000Z',
      paidDate: '2017-08-12T03:00:00.000Z',
      typePayment: 'DINHEIRO' },
    { clientName: 'LUCAS SILVA SOUZA',
      dateRB: '2017-08-16T03:00:00.000Z',
      price: '12',
      billingDate: '2017-08-30T03:00:00.000Z',
      paidDate: '2017-08-12T03:00:00.000Z',
      typePayment: 'DINHEIRO' },
    { clientName: 'LUCAS SILVA SOUZA',
      dateRB: '2017-08-16T03:00:00.000Z',
      price: '12',
      billingDate: '2017-08-30T03:00:00.000Z',
      paidDate: '2017-08-12T03:00:00.000Z',
      typePayment: 'DINHEIRO' },
    { clientName: 'LUCAS SILVA SOUZA',
      dateRB: '2017-08-16T03:00:00.000Z',
      price: '12',
      billingDate: '2017-08-30T03:00:00.000Z',
      paidDate: '2017-08-12T03:00:00.000Z',
      typePayment: 'DINHEIRO' }
  ]
};

export default function registerBusiness(state: business = initialState, action: actionType) {
  switch (action.type) {
    case HANDLE_SUBMIT_BUSINESS: {
      const item = action.payload;
      const list = [...state.business, item];
      return Object.assign({}, state, {
        business: list
      });
    }
    default:
      return state;
  }
}
