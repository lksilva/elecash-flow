// @flow
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import styles from './Register.css';
import DatePicker from 'material-ui/DatePicker';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class Register extends Component {

  formatDate(date) {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }

  render() {
    return (
      <div>
        <h3 className={styles.center}>ORDEM DE SERVIÇO</h3>
        <form className={styles.form}>
          <div className={styles.card}>
            <TextField
              floatingLabelText="TSO"
            />
            <TextField
              floatingLabelText="Número do Cliente"
            />
            <DatePicker
              hintText="Portrait Inline Dialog"
              container="inline"
              formatDate={this.formatDate}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
