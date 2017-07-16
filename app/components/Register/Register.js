// @flow
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

class Register extends Component {
  render() {
    return (
      <div>
        <TextField
          hintText="Hint Text"
          floatingLabelText="Floating Label Text"
        />
      </div>
    );
  }
}

export default Register;
