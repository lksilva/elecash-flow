// @flow
export const HANDLE_SUBMIT_BOXBOOK = 'HANDLE_SUBMIT_BOXBOOK';

export const saveBoxBook = (values) => ({
  type: HANDLE_SUBMIT_BOXBOOK,
  payload: values
});
