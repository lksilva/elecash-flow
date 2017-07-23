// @flow
export const HANDLE_MENU = 'HANDLE_MENU';

export function handleClick(id) {
  return {
    menu: id,
    type: HANDLE_MENU
  };
}
