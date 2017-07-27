// @flow
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import styles from './Register.css';
import DatePicker from 'material-ui/DatePicker';
import InputMask from 'react-input-mask';
import Divider from 'material-ui/Divider';
import { Field, reduxForm } from 'redux-form';

const customStyle = {
  paddingDatePicker: {
    paddingTop: '24px'
  },
  fullRow: {
    flex: '1 100%',
    margin: '0 8px 0 8px',
  },
  upperCase: {
    textTransform: 'uppercase'
  },
  marginTop: {
    marginTop: '20px'
  }
};

const InstructForm = () => (
  <div className={styles.card}>
    <div>
      <h5>QUANTIDADE</h5>
      <TextField underlineShow={false} name="qt1" />
      <Divider />
      <TextField underlineShow={false} name="qt2" />
      <Divider />
      <TextField underlineShow={false} name="qt3" />
      <Divider />
    </div>
    <div>
      <h5>DESCRIÇÃO LENTES/ARMAÇÃO</h5>
      <TextField underlineShow={false} name="desc1" />
      <Divider />
      <TextField underlineShow={false} name="desc2" />
      <Divider />
      <TextField underlineShow={false} name="desc3" />
      <Divider />
    </div>
    <div>
      <h5>VALOR</h5>
      <TextField underlineShow={false} name="price1" />
      <Divider />
      <TextField underlineShow={false} name="price2" />
      <Divider />
      <TextField underlineShow={false} name="price3" />
      <Divider />
    </div>
  </div>
);

const renderTextField = ({
  input,
  label,
  type,
}) =>
  (<TextField
    floatingLabelText={label}
    {...input}
    type={type}
  />);

class Register extends Component {
  tso: any;
  clientNumber: any;
  submit: () => void;
  props: {
    saveServiceOrder: () => void,
    handleSubmit: () => void,
    register_form: object
  }

  constructor() {
    super();
    this.submit = this.submit.bind(this);
  }

  formatDate(date) {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }

  submit(payload: object) {
    this.props.saveServiceOrder(payload);
  }

  render() {
    return (
      <div>
        <h3 className={styles.center}>ORDEM DE SERVIÇO</h3>
        <form className={styles.form} onSubmit={this.props.handleSubmit(this.submit)}>
          <div className={styles.card}>
            <Field
              name="tso"
              component={renderTextField}
              label="TSO"
              type="number"
            />
            <Field
              name="clientNumber"
              component={renderTextField}
              label="NÚMERO DO CLIENTE"
              type="number"
            />
            <DatePicker
              floatingLabelText="DATA"
              hintText="DATA"
              container="inline"
              formatDate={this.formatDate}
              name="date"
            />
            <TextField
              style={customStyle.fullRow}
              floatingLabelText="NOME"
              inputStyle={customStyle.upperCase}
              name="name"
            />
            <TextField
              style={customStyle.fullRow}
              floatingLabelText="PAI"
              inputStyle={customStyle.upperCase}
              name="father"
            />
            <TextField
              style={customStyle.fullRow}
              floatingLabelText="MÃE"
              inputStyle={customStyle.upperCase}
              name="mother"
            />
            <TextField
              floatingLabelText="RG"
              type="number"
              name="rg"
            />
            <TextField
              floatingLabelText="ORG EXP"
              inputStyle={customStyle.upperCase}
              name="org_exp"
            />
            <TextField floatingLabelText="CPF" name="cpf">
              <InputMask mask="999.999.999-99" />
            </TextField>
            <TextField floatingLabelText="DATA DE NASCIMENTO" name="date_of_birth">
              <InputMask mask="99/99/9999" />
            </TextField>
            <TextField
              floatingLabelText="ENDEREÇO"
              inputStyle={customStyle.upperCase}
              name="address"
            />
            <TextField
              floatingLabelText="BAIRRO"
              inputStyle={customStyle.upperCase}
              name="neighborhood"
            />
            <TextField
              floatingLabelText="CIDADE"
              inputStyle={customStyle.upperCase}
              name="city"
            />
            <TextField
              floatingLabelText="UF"
              maxLength="2"
              inputStyle={customStyle.upperCase}
              name="uf"
            />
            <TextField floatingLabelText="CEP" name="cep">
              <InputMask mask="99999-9999" />
            </TextField>
            <TextField floatingLabelText="TELEFONE RESIDENCIAL" name="phone">
              <InputMask mask="(99) 9999-9999" />
            </TextField>
            <TextField
              floatingLabelText="REFERÊNCIAL"
              inputStyle={customStyle.upperCase}
              name="reference"
            />
            <TextField floatingLabelText="CELULAR" name="cell_phone">
              <InputMask mask="(99) 999999999" />
            </TextField>
          </div>
          <InstructForm />
          <button type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'Register'
})(Register);
