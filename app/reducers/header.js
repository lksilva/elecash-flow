// @flow
import { HANDLE_MENU } from '../actions/header';

export type itemsStateType = {
  +items: arrays
};

type actionType = {
  +type: string
};

const initialState = {
  items: [
        { id: 1, route: '/', active: true, name: 'Página Inicial' },
        { id: 2, route: '/businessList', active: false, name: 'Lista de Vendas' },
        { id: 3, route: '/boxBook', active: false, name: 'Livro Caixa' },
        { id: 4, route: '/register', active: false, name: 'Cadastrar Cliente' }
  ]
};

export default function header(state: items = initialState, action: actionType) {
  switch (action.type) {
    case HANDLE_MENU:
    // return Object.assign({}, state, {
    //     visibilityFilter: action.filter
    //   })
      console.debug(action);
      return state;
    default:
      return state;
  }
}
