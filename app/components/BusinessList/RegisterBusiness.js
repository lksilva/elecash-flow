import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
// Data - Cliente - Tipo de Pagemento - Valor - Data Pagamento - Dia Pagamento

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
      <form onSubmit={this.props.handleSubmit(this.submit)}>
        <Field
          name="date"
          floatingLabelText="DATA"
          hintText="DATA"
          container="inline"
          component={renderDatePicker}
        />

        <RaisedButton type="submit" label="Salvar" primary />
      <form>
    );
  }
}

export default reduxForm({
  form: 'RegisterBusiness'
})(RegisterBusiness);
