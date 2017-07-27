// @flow
export const HANDLE_SUBMIT = 'HANDLE_SUBMIT';

export const handleSubmit = (values) => ({
  type: HANDLE_SUBMIT,
  payload: values
});
