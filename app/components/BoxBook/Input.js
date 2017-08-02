// @flow
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { TableRow, TableRowColumn }
  from 'material-ui/Table';
import DatePicker from 'material-ui/DatePicker';

// transformar pro hroario pt br .toLocaleString('pt-br')

// const DateTimeFormatObject = Intl.DateTimeFormat("pt-BR");
const DateTimeFormat = global.Intl.DateTimeFormat;

const formatDate = date => {
  return Intl.DateTimeFormat('PT-BR').format(date);
}

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
      okLabel="OK"
      cancelLabel="Cancelar"
      locale="pt-br"
    />
);

class Input extends Component {
  render() {
    console.log('DATE TIME FORMART OBJECTO', DateTimeFormat);
    return (
      <TableRow>
        <TableRowColumn>
          <Field
            name="dataBoxBook"
            floatingLabelText="DATA"
            hintText="DATA"
            container="inline"
            component={renderDatePicker}
          /></TableRowColumn>
        <TableRowColumn>2</TableRowColumn>
        <TableRowColumn>3</TableRowColumn>
        <TableRowColumn>4</TableRowColumn>
        <TableRowColumn>5</TableRowColumn>
      </TableRow>
    );
  }

}

export default reduxForm({
  form: 'RegisterBoxBook'
})(Input);

