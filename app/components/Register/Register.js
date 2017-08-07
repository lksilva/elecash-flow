// @flow
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import styles from './Register.css';
import InstructForm from './InstructForm';
import LensInformation from './LensInformation';
import DatePicker from 'material-ui/DatePicker';
import InputMask from 'react-input-mask';
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

const renderTextField = ({
  input,
  floatingLabelText,
  type,
}) =>
  (<TextField
    floatingLabelText={floatingLabelText}
    type={type}
    {...input}
  />);

const renderMaskField = ({
  input,
  floatingLabelText,
  mask,
}) => (
  <TextField floatingLabelText={floatingLabelText} {...input}>
    <InputMask mask={mask} />
  </TextField>
);

const stylezedTextField = ({
  input,
  style,
  floatingLabelText,
  inputStyle
}) => (
  <TextField
    style={style}
    floatingLabelText={floatingLabelText}
    inputStyle={inputStyle}
    {...input}
  />
);

const DateTimeFormat = global.Intl.DateTimeFormat;

const formatDate = date => Intl.DateTimeFormat('PT-BR').format(date);

const renderDatePicker = ({
  input,
  floatingLabelText,
  hintText,
  container,
}) => (

  <DatePicker
    hintText={hintText}
    container={container}
    DateTimeFormat={DateTimeFormat}
    formatDate={formatDate}
    floatingLabelText={floatingLabelText}
    okLabel="OK"
    cancelLabel="Cancelar"
    locale="pt-br"
    onChange={(event, value) => input.onChange(value)}
  />
);


const validate = values => {
  const errors = {};
  if (!values.tso) {
    errors.tso = 'Numero TSO é obrigatório';
  }
  if (!values.name) {
    errors.name = 'Nome do cliente é obrigatório';
  }
  if (!values.dateUser) {
    errors.dateUser = 'Data é obrigatória';
  }
  return errors;
};

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
              floatingLabelText="TSO"
              type="number"
              component={renderTextField}
            />
            <Field
              name="clientNumber"
              floatingLabelText="NÚMERO DO CLIENTE"
              type="number"
              component={renderTextField}
            />
            <Field
              name="dateUser"
              floatingLabelText="DATA"
              hintText="DATA"
              container="inline"
              component={renderDatePicker}
            />
            <Field
              name="name"
              style={customStyle.fullRow}
              floatingLabelText="NOME"
              inputStyle={customStyle.upperCase}
              component={stylezedTextField}
            />
            <Field
              style={customStyle.fullRow}
              floatingLabelText="PAI"
              inputStyle={customStyle.upperCase}
              name="father"
              component={stylezedTextField}
            />
            <Field
              style={customStyle.fullRow}
              floatingLabelText="MÃE"
              inputStyle={customStyle.upperCase}
              name="mother"
              component={stylezedTextField}
            />
            <Field
              floatingLabelText="RG"
              type="number"
              name="rg"
              component={renderTextField}
            />
            <Field
              floatingLabelText="ORG EXP"
              inputStyle={customStyle.upperCase}
              name="org_exp"
              component={stylezedTextField}
            />
            <Field floatingLabelText="CPF" name="cpf" mask="999.999.999-99" component={renderMaskField} />
            <Field floatingLabelText="DATA DE NASCIMENTO" name="date_of_birth" mask="99/99/9999" component={renderMaskField} />
            <Field
              floatingLabelText="ENDEREÇO"
              inputStyle={customStyle.upperCase}
              name="address"
              component={stylezedTextField}
            />
            <Field
              floatingLabelText="BAIRRO"
              inputStyle={customStyle.upperCase}
              name="neighborhood"
              component={stylezedTextField}
            />
            <Field
              floatingLabelText="CIDADE"
              inputStyle={customStyle.upperCase}
              name="city"
              component={stylezedTextField}
            />
            <Field
              floatingLabelText="UF"
              inputStyle={customStyle.upperCase}
              name="uf"
              component={stylezedTextField}
            />
            <Field floatingLabelText="CEP" name="cep" mask="99999-9999" component={renderMaskField} />
            <Field floatingLabelText="TELEFONE RESIDENCIAL" name="phone" mask="(99) 9999-9999" component={renderMaskField} />
            <Field
              floatingLabelText="REFERÊNCIAL"
              inputStyle={customStyle.upperCase}
              name="reference"
              component={stylezedTextField}
            />
            <Field floatingLabelText="CELULAR" name="cell_phone" mask="(99) 999999999" component={renderMaskField} />
          </div>
          <InstructForm />
          <LensInformation />
          <RaisedButton type="submit" label="Salvar" primary style={customStyle.marginTop} />
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'Register',
  validate
})(Register);
