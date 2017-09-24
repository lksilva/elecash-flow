// @flow
import React, { Component } from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import styles from './BusinessList.css';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
// Data - Cliente - Tipo de Pagemento - Valor - Data Pagamento - Dia Pagamento

const afterSubmit = (result, dispatch) => {
  window.alert('Venda cadastrada com sucesso!!!');
  return dispatch(reset('RegisterBusiness'));
};

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

const renderSelectField = ({
  input,
  label,
  children,
  ...custom
}) =>
  (<SelectField
    floatingLabelText={label}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
    children={children}
    style={customStyle.fullRow}
    {...custom}
  />);

const validate = values => {
  const errors = {};
  if (!values.clientName) {
    errors.clientName = 'Nome do cliente é obrigatório';
  }
  if (!values.typePayment) {
    errors.typePayment = 'Tipo de pagamento é obrigatório';
  }
  if (!values.billingDate) {
    errors.billingDate = 'Dia do pagamento é obrigatório';
  }
  if (!values.price) {
    errors.price = 'Preço da venda é obritório';
  }
  return errors;
};

class RegisterBusiness extends Component {
  submit: () => void;

  props: {
    saveBusiness: () => void,
    handleSubmit: () => void,
    installmentPay: boolean
  }

  constructor() {
    super();
    this.state = {
      open: false
    };
    this.submit = this.submit.bind(this);
  }

  submit(payload: object) {
    this.props.saveBusiness(payload);
  }

  openTouch() {
    this.setState({ open: true });
  }

  closeTouch() {
    this.setState({ open: false });
  }

  render() {
    console.log('Mostrar Select Menu de pagar parcelado', this.props.installmentPay);
    return (
      <form onSubmit={this.props.handleSubmit(this.submit)} className={styles.form}>
        <Field
          name="dateRB"
          floatingLabelText="DATA DA REALIZAÇÃO DA VENDA"
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
          component={renderSelectField}
          label="TIPO DE PAGAMENTO"
        >
          <MenuItem value="DN" primaryText="DINHEIRO" />
          <MenuItem value="CT" primaryText="CARTÃO" />
          <MenuItem value="BL" primaryText="BOLETO" />
          <MenuItem value="CR" primaryText="CARNÉ" />
        </Field>
        {this.props.installmentPay &&
          <Field
            name="plotsPayment"
            component={renderSelectField}
            label="NUMERO DE PARCELAS"
          >
            <MenuItem value={1} primaryText="1x" />
            <MenuItem value={2} primaryText="2x" />
            <MenuItem value={3} primaryText="3x" />
            <MenuItem value={4} primaryText="4x" />
            <MenuItem value={5} primaryText="5x" />
            <MenuItem value={6} primaryText="6x" />
            <MenuItem value={7} primaryText="7x" />
            <MenuItem value={8} primaryText="8x" />
            <MenuItem value={9} primaryText="9x" />
            <MenuItem value={10} primaryText="10x" />
            <MenuItem value={11} primaryText="11x" />
            <MenuItem value={12} primaryText="12x" />
            <MenuItem value={15} primaryText="15x" />
          </Field>
        }
        <Field
          name="price"
          floatingLabelText="VALOR"
          type="number"
          component={renderTextField}
        />
        <Field
          name="billingDate"
          floatingLabelText="DATA DO PAGAMENTO"
          hintText="DATA"
          container="inline"
          component={renderDatePicker}
        />
         <Field
           name="paidDate"
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
  form: 'RegisterBusiness',
  onSubmitSuccess: afterSubmit,
  validate
})(RegisterBusiness);
