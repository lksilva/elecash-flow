import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav>
        <Link to="/">Página Inicial</Link>
        <Link to="/businessList">Lista de Vendas</Link>
        <Link to="/boxBook">Livro Caixa</Link>
        <Link to="/register">Cadastrar Cliente</Link>
      </nav>
    );
  }
}

export default Header;
