// @flow
export const HANDLE_MENU = 'HANDLE_MENU';

export function handleClick(name) {
  return {
    menu: name,
    type: HANDLE_MENU
  };
}
