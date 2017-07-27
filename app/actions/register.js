// @flow
export const HANDLE_SUBMIT = 'HANDLE_SUBMIT';

export const saveServiceOrder = (values) => ({
  type: HANDLE_SUBMIT,
  payload: values
});
