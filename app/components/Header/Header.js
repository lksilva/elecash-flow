import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';

class Header extends Component {
  render() {
    return (
      <nav className={styles.menu}>
        <ul className={styles.menuList}>
          <li className={styles.menuItem}><Link className={styles.menuLink} to="/">Página Inicial</Link></li>
          <li className={styles.menuItem}><Link className={styles.menuLink} to="/businessList">Lista de Vendas</Link></li>
          <li className={styles.menuItem}><Link className={styles.menuLink} to="/boxBook">Livro Caixa</Link></li>
          <li className={`${styles.menuItem} ${styles.menuItemCurrent}`}><Link className={styles.menuLink} to="/register">Cadastrar Cliente</Link></li>
        </ul>
      </nav>

    );
  }
}

export default Header;
