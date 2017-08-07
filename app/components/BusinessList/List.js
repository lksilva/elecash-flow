import React, { Component } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn }
  from 'material-ui/Table';
import ActionOK from 'material-ui/svg-icons/action/done';

class List extends Component {

  props: {
    business: Array
  }

  render() {
    return (
      <Table
        fixedHeader
        fixedFooter
      >
        <TableHeader
          displaySelectAll={false}
          adjustForCheckbox={false}
          enableSelectAll={false}
        >
          <TableRow>
            <TableHeaderColumn colSpan="6" style={{ textAlign: 'center' }}>
              {'Livro caixa do mês '}
            </TableHeaderColumn>
          </TableRow>
          <TableRow>
            <TableHeaderColumn tooltip="Data">Data</TableHeaderColumn>
            <TableHeaderColumn tooltip="Descrição">Cliente</TableHeaderColumn>
            <TableHeaderColumn tooltip="Entrada">Tipo de Pagamento</TableHeaderColumn>
            <TableHeaderColumn tooltip="Saída">Valor</TableHeaderColumn>
            <TableHeaderColumn tooltip="Saída">Data do Pagamento</TableHeaderColumn>
            <TableHeaderColumn tooltip="Saldo">Dia do Pagamento</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {this.props.business.map((row, index) => (
            <TableRow key={index}>
              <TableRowColumn>{row.dateRB.toLocaleString('pt-br').slice(0, 10)}</TableRowColumn>
              <TableRowColumn>{row.clientName}</TableRowColumn>
              <TableRowColumn>{row.typePayment}</TableRowColumn>
              <TableRowColumn>{row.price}</TableRowColumn>
              <TableRowColumn>{row.billingDate.toLocaleString('pt-br').slice(0, 10)}</TableRowColumn>
              <TableRowColumn>{row.paidDate.toLocaleString('pt-br').slice(0, 10)}</TableRowColumn>
            </TableRow>
              ))}
        </TableBody>
      </Table>
    );
  }
}

export default List;
