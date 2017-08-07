// @flow
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import styles from './BusinessList.css';
// Data - Cliente - Tipo de Pagemento - Valor - Data Pagamento - Dia Pagamento

const upper = value => value && value.toUpperCase();

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
    style={customStyle.fullRow}
    textFieldStyle={customStyle.fullWidth}
    okLabel="OK"
    cancelLabel="Cancelar"
    locale="pt-br"
    onChange={(event, value) => input.onChange(value)}
  />
);

const renderTextField = ({
  input,
  floatingLabelText,
  type,
}) =>
  (<TextField
    floatingLabelText={floatingLabelText}
    style={customStyle.fullRow}
    type={type}
    {...input}
  />);

const customStyle = {
  fullRow: {
    width: '95%',
    marginLeft: '2.5%',
  },
  fullWidth: {
    width: '100%'
  },
  btn: {
    minWidth: '95%',
    margin: '2.5%'
  },
};

class RegisterBusiness extends Component {
  submit: () => void;

  props: {
    saveBusiness: () => void,
    handleSubmit: () => void
  }

  constructor() {
    super();
    this.submit = this.submit.bind(this);
  }

  submit(payload: object) {
    this.props.saveBusiness(payload);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.submit)} className={styles.form}>
        <Field
          name="dateRB"
          floatingLabelText="DATA"
          hintText="DATA"
          container="inline"
          component={renderDatePicker}
        />
        <Field
          name="clientName"
          floatingLabelText="NOME DO CLIENTE"
          type="text"
          component={renderTextField}
          normalize={upper}
        />
        <Field
          name="typePayment"
          floatingLabelText="TIPO DE PAGAMENTO"
          type="text"
          component={renderTextField}
          normalize={upper}
        />
        <Field
          name="price"
          floatingLabelText="VALOR"
          type="number"
          component={renderTextField}
        />
        <Field
          name="dateRB"
          floatingLabelText="DATA DO PAGAMENTO"
          hintText="DATA"
          container="inline"
          component={renderDatePicker}
        />
        <Field
          name="dateRB"
          floatingLabelText="DIA DO PAGAMENTO"
          hintText="DATA"
          container="inline"
          component={renderDatePicker}
        />
        <RaisedButton style={customStyle.btn} type="submit" label="Salvar" primary />
      </form>
    );
  }
}

export default reduxForm({
  form: 'RegisterBusiness'
})(RegisterBusiness);
