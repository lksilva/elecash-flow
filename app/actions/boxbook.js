// @flow
export const HANDLE_SUBMIT_BOXBOOK = 'HANDLE_SUBMIT_BOXBOOK';
export const LIST_BOXBOOK = 'LIST_BOXBOOK';

import { remote } from 'electron';

const db = remote.getGlobal('db');

export const populate = (list) => ({
  type: LIST_BOXBOOK,
  payload: list
});

export function saveBoxBook(item) {
  return (dispatch: (action: actionType) => void) => {
    db.collection('boxBook').insert({
      dateBoxBook: item.dateBoxBook,
      description: item.description,
      input: item.input,
      output: item.output,
      isData: item.isData
    }, (err, result) => {
      dispatch(getBoxBookList());
    });
  };
}

export function getBoxBookList() {
  return (dispatch: (action: actionType) => void) => {
    db.collection('boxBook').find().sort({ dateBoxBook: -1 }).toArray((err, boxBookList) => {
      dispatch(populate(boxBookList));
    });
  };
}
