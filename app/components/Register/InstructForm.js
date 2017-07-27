// @flow
import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import styles from './Register.css';
import { Field } from 'redux-form';

const renderTextField = ({
  input,
  underlineShow,
}) =>
  (<TextField
    underlineShow={underlineShow}
    {...input}
  />);


class InstructForm extends Component {

  render() {
    return (
      <div className={styles.card}>
        <div>
          <h5>QUANTIDADE</h5>
          <Field component={renderTextField} underlineShow={false} name="qt1" />
          <Divider />
          <Field component={renderTextField} underlineShow={false} name="qt2" />
          <Divider />
          <Field component={renderTextField} underlineShow={false} name="qt3" />
          <Divider />
        </div>
        <div>
          <h5>DESCRIÇÃO LENTES/ARMAÇÃO</h5>
          <Field component={renderTextField} underlineShow={false} name="desc1" />
          <Divider />
          <Field component={renderTextField} underlineShow={false} name="desc2" />
          <Divider />
          <Field component={renderTextField} underlineShow={false} name="desc3" />
          <Divider />
        </div>
        <div>
          <h5>VALOR</h5>
          <Field component={renderTextField} underlineShow={false} name="price1" />
          <Divider />
          <Field component={renderTextField} underlineShow={false} name="price2" />
          <Divider />
          <Field component={renderTextField} underlineShow={false} name="price3" />
          <Divider />
        </div>
      </div>
    );
  }

}
export default InstructForm;
