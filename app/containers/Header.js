import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/businessList">Lista de Vendas</Link>
        <Link to="/boxBook">Livro Caixa</Link>
        <Link to="/register">Cadastrar Cliente</Link>
      </div>
    );
  }
}

export default Header;
