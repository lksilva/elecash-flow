// @flow
// const update = (todoId, isDone) => (dispatch) => {
//   dispatch({
//     type: 'SET_SAVING',
//     saving: true
//   });
//   // Function is expected to return a promise
//   callUpdateApi(todoId, isDone).then(updatedTodo => {
//     dispatch({
//       type: 'SET_SAVING',
//       saving: false
//     });
//   });
//   // TBD: Handle errors
// }
// export const HANDLE_SUBMIT_BUSINESS = 'HANDLE_SUBMIT_BUSINESS';
export const PAY = 'PAY';
export const LIST_BUSINESS = 'LIST_BUSINESS';

import { remote } from 'electron';

const db = remote.getGlobal('db');

type actionType = {
  +type: string
};

export const payOff = (value) => ({
  type: PAY,
  id: value
});

export const populate = (list) => ({
  type: LIST_BUSINESS,
  payload: list
});

export function getBusinessList() {
  return (dispatch: (action: actionType) => void) => {
    db.collection('business').find().toArray((err, businessList) => {
      dispatch(populate(businessList.map(register => register)));
    });
  };
}

export function saveBusiness(item) {
  return (dispatch: (action: actionType) => void) => {
    db.collection('business').insertOne({ item }, () => {
      dispatch(getBusinessList());
    });
  };
}
