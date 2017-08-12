// @flow
export const UPDATE_STORE = 'UPDATE_STORE';
export const GET_ALL = 'GET_ALL';

import { remote } from 'electron';

const db = remote.getGlobal('db');

export const listServiceOrders = () => ({
  type: GET_ALL,
});

export const populate = (values) => ({
  type: UPDATE_STORE,
  payload: values
});

export function getListServiceOrder() {
  return (dispatch: (action: actionType) => void) => {
    db.collection('serviceOrder').find().toArray((err, list) => {
      dispatch(populate(list.map(item => item)));
    });
  };
}

export function saveServiceOrder(item) {
  return (dispatch: (action: actionType) => void) => {
    db.collection('serviceOrder').insert({
      ...item
    }, (err, result) => {
      dispatch(getListServiceOrder());
    });
  };
}
