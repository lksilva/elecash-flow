import React, { Component } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn }
  from 'material-ui/Table';
import ActionOK from 'material-ui/svg-icons/action/get-app';
import RaisedButton from 'material-ui/RaisedButton';
import { fullWhite } from 'material-ui/styles/colors';
import styles from './BusinessList.css';

class List extends Component<void, Props, State> {

  props: {
    business: Array,
    payOff: Function
  }

  constructor() {
    super();
    this.send = this.send.bind(this);
  }

  send(id) {
    this.props.payOff(id.toString());
  }

  render() {
    return (
      <Table
        fixedHeader
        fixedFooter
        selectable={false}
      >
        <TableHeader
          displaySelectAll={false}
          adjustForCheckbox={false}
          enableSelectAll={false}
        >
          <TableRow>
            <TableHeaderColumn colSpan="6" style={{ textAlign: 'center' }}>
              {'Lista de vendas'}
            </TableHeaderColumn>
          </TableRow>
          <TableRow>
            <TableHeaderColumn tooltip="Data">Data</TableHeaderColumn>
            <TableHeaderColumn tooltip="Cliente">Cliente</TableHeaderColumn>
            <TableHeaderColumn tooltip="Tipo de Pagamento">Tipo de Pagamento</TableHeaderColumn>
            <TableHeaderColumn tooltip="Valor">Valor</TableHeaderColumn>
            <TableHeaderColumn tooltip="Data do Pagamento">Data do Pagamento</TableHeaderColumn>
            <TableHeaderColumn tooltip="Dia do Pagamento">Dia do Pagamento</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {this.props.business.map((row, index) => (
            <TableRow key={index} className={row.isLate ? styles.warning : ''}>
              <TableRowColumn>{row.dateRB.toLocaleString('pt-br').slice(0, 10)}</TableRowColumn>
              <TableRowColumn>{row.clientName}</TableRowColumn>
              <TableRowColumn>{row.typePayment}</TableRowColumn>
              <TableRowColumn>{row.price}</TableRowColumn>
              <TableRowColumn>{row.billingDate.toLocaleString('pt-br').slice(0, 10)}</TableRowColumn>
              <TableRowColumn>{ row.paidDate ? row.paidDate.toLocaleString('pt-br').slice(0, 10) :
              <RaisedButton
                onClick={() => this.send(row._id)}
                backgroundColor="#a4c639"
                icon={<ActionOK color={fullWhite} />}
                label="Pagar"
                labelColor={fullWhite}
              />
              }</TableRowColumn>
            </TableRow>
              ))}
        </TableBody>
      </Table>
    );
  }
}

export default List;
