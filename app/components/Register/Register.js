// @flow
import React, { Component } from 'react';
import styles from './Register.css';
import { Link } from 'react-router-dom';

class Register extends Component {
  render() {
    return (
      <div>
        <div className={styles.backButton} data-tid="backButton">
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <h1>Registrar cliente</h1>
      </div>
    );
  }
}

export default Register;
