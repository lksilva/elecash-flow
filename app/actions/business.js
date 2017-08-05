// @flow
export const HANDLE_SUBMIT_BUSINESS = 'HANDLE_SUBMIT_BUSINESS';

export const saveBusiness = (values) => ({
  type: HANDLE_SUBMIT_BUSINESS,
  payload: values
});
