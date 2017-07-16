// @flow
import React, { Component } from 'react';
import styles from './BoxBook.css';
import { Link } from 'react-router-dom';

class BoxBook extends Component {
  render() {
    return (
      <div>
        <div className={styles.backButton} data-tid="backButton">
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <h1>Livro Caixa</h1>
      </div>
    );
  }
}

export default BoxBook;
