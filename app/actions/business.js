// @flow
export const HANDLE_SUBMIT_BUSINESS = 'HANDLE_SUBMIT_BUSINESS';
export const PAY = 'PAY';

export const saveBusiness = (values) => ({
  type: HANDLE_SUBMIT_BUSINESS,
  payload: values
});

export const payOff = (value) => ({
  type: PAY,
  id: value
});
