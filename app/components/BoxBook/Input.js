// @flow
import React, { Component } from 'react';
// import { Field } from 'redux-form';
import { TableRow, TableRowColumn }
  from 'material-ui/Table';
// const renderTextField = ({
//   input,
//   underlineShow,
// }) =>
//   (<TextField
//     underlineShow={underlineShow}
//     {...input}
//   />);


class Input extends Component {

  render() {
    return (
      <TableRow>
        <TableRowColumn>1</TableRowColumn>
        <TableRowColumn>2</TableRowColumn>
        <TableRowColumn>3</TableRowColumn>
        <TableRowColumn>4</TableRowColumn>
        <TableRowColumn>5</TableRowColumn>
      </TableRow>
    );
  }

}
export default Input;
