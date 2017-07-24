// @flow
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import styles from './Register.css';
import { blue500 } from 'material-ui/styles/colors';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const inlinestyles = {
  floatingLabelFocusStyle: {
    color: blue500,
  },
  underlineStyle: {
    borderColor: '#789fdc',
  },
  floatingLabelStyle: {
    color: '#789fdc',
  },
};

class Register extends Component {
  render() {
    return (
      <div>
        <h1 className={styles.center}>ORDEM DE SERVIÇO</h1>
        <form>
          <TextField
            floatingLabelText="Float text"
            underlineStyle={inlinestyles.underlineStyle}
            floatingLabelStyle={inlinestyles.floatingLabelStyle}
            floatingLabelFocusStyle={inlinestyles.floatingLabelFocusStyle}
          />
        </form>
      </div>
    );
  }
}

export default Register;
