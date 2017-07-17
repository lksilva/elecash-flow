// @flow
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

class Register extends Component {
  render() {
    return (
      <div>
        <h1 className={'centralizeText'}>Cadastrar Cliente</h1>
        <form>
          <TextField
            hintText="Hint Text"
            floatingLabelText="Floating Label Text"
          />
        </form>
      </div>
    );
  }
}

export default Register;
