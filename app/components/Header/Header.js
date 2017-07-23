import React, { Component } from 'react';
import styles from './Header.css';
import ItemMenu from './ItemMenu';

class Header extends Component<any, any> {
  props: {
    handleClick: () => void,
    items: array
  };

  handleOnChange = (menu: string) => {
    this.props.handleClick(menu);
  }

  render() {
    const { items } = this.props;
    return (
      <nav className={styles.menu}>
        <ul className={styles.menuList}>
          {items.map(item => <ItemMenu key={item.id} route={item.route} active={item.active} name={item.name} handleOnChange={() => this.handleOnChange(item.name)} />)}
        </ul>
      </nav>
    );
  }
}

export default Header;
