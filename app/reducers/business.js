// @flow
import { HANDLE_SUBMIT_BUSINESS, PAY } from '../actions/business';

export type businessStateType = {
  +business: object
};

type actionType = {
  +type: string
};

const initialState = {
  business: [
    { id: 1,
      clientName: 'LUCAS SILVA SOUZA',
      dateRB: '2017-08-16T03:00:00.000Z',
      price: '12',
      billingDate: '2017-08-30T03:00:00.000Z',
      paidDate: '2017-08-12T03:00:00.000Z',
      typePayment: 'DINHEIRO' },
    { id: 2,
      clientName: 'LUCAS SILVA SOUZA',
      dateRB: '2017-08-16T03:00:00.000Z',
      price: '12',
      billingDate: '2017-08-30T03:00:00.000Z',
      paidDate: '2017-08-12T03:00:00.000Z',
      typePayment: 'DINHEIRO' },
    { id: 3,
      clientName: 'LUCAS SILVA SOUZA',
      dateRB: '2017-08-16T03:00:00.000Z',
      price: '12',
      billingDate: '2017-08-30T03:00:00.000Z',
      paidDate: '2017-08-12T03:00:00.000Z',
      typePayment: 'DINHEIRO' },
    { id: 4,
      clientName: 'LUCAS SILVA SOUZA',
      dateRB: '2017-08-16T03:00:00.000Z',
      price: '12',
      billingDate: '2017-08-30T03:00:00.000Z',
      paidDate: '',
      typePayment: 'DINHEIRO' },
    { id: 5,
      clientName: 'LUCAS SILVA SOUZA',
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
    case PAY: {
      const list = state.business.map(b => {
        if (b.id === action.id) {
          b.paidDate = new Date().toISOString();
        }
        return b;
      });

      console.log(list);
      return Object.assign({}, state, {
        business: list
      });
    }
    default:
      return state;
  }
}
