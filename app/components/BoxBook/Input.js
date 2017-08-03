// @flow
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { TableRow, TableRowColumn }
  from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import { fullWhite } from 'material-ui/styles/colors';
import ActionAndroid from 'material-ui/svg-icons/action/done';

const style = {
  margin: 12,
};

// transformar pro hroario pt br .toLocaleString('pt-br')
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
    DateTimeFormat={DateTimeFormat}
    formatDate={formatDate}
    floatingLabelText={floatingLabelText}
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
    type={type}
    {...input}
  />);

class Input extends Component <void, Props, State> {
  sendBoxBook: Function;

  props: {
    handleInput: () => void
  }

  constructor() {
    super();
    this.state = {
      showInput: false,
    };
    this.sendBoxBook = this.sendBoxBook.bind(this);
  }

  sendBoxBook() {
    this.props.handleInput();
  }

  render() {
    return (
        <TableRow>
          <TableRowColumn>
            <Field
              name="dateBoxBook"
              floatingLabelText="DATA"
              hintText="DATA"
              container="inline"
              component={renderDatePicker}
            />
          </TableRowColumn>
          <TableRowColumn>
            <Field
              name="description"
              floatingLabelText="DESCRIÇÃO"
              component={renderTextField}
              normalize={upper}
              type="text"
            />
          </TableRowColumn>
          <TableRowColumn>
            <Field
              name="input"
              floatingLabelText="ENTRADA"
              component={renderTextField}
              normalize={upper}
              type="number"
            />
          </TableRowColumn>
          <TableRowColumn>
            <Field
              name="output"
              floatingLabelText="SAÍDA"
              component={renderTextField}
              type="number"
            />
          </TableRowColumn>
          <TableRowColumn>
            <RaisedButton
              onClick={this.sendBoxBook}
              backgroundColor="#a4c639"
              icon={<ActionAndroid color={fullWhite} />}
              style={style}
            />
          </TableRowColumn>
        </TableRow>
    );
  }

}

export default reduxForm({
  form: 'RegisterBoxBook'
})(Input);

