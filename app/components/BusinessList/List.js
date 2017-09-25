import React, { Component } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn }
  from 'material-ui/Table';
import ActionOK from 'material-ui/svg-icons/action/get-app';
import ActionFIND from 'material-ui/svg-icons/action/find-in-page';
import RaisedButton from 'material-ui/RaisedButton';
import { fullWhite } from 'material-ui/styles/colors';
import styles from './BusinessList.css';
import TextField from 'material-ui/TextField';

class List extends Component<void, Props, State> {
  props: {
    business: Array,
    payOff: Function,
    find: Function
  }

  constructor() {
    super();
    this.send = this.send.bind(this);
    this.findByName = this.findByName.bind(this);
  }

  state = {
    keySource: ''
  };

  handleUpdateInput = (event, value) => {
    // const allowed = this.props.business.map(item => item.clientName).filter(item => {
    //   console.log('Este item inclui o valor', item.toUpperCase().includes(value.toUpperCase()));
    //   return item.toUpperCase().includes(value.toUpperCase());
    // });
    // if(!allowed.length) return;
    // this.setState({
    //   dataSource: [
    //     ...Object.values(allowed)
    //   ],
    // });
    this.setState({
      keySource: value.toUpperCase()
    });
  };

  send(id) {
    this.props.payOff(id.toString());
  }

  findByName() {
    this.props.find(this.state.keySource);
  }

  render() {
    return (
      <div>
        <div className="FindField">
          <TextField
            hintText="Buscar situação do cliente"
            floatingLabelText="Nome do cliente:"
            fullWidth
            onChange={this.handleUpdateInput}
          />
          <RaisedButton
            onClick={this.findByName}
            backgroundColor="#a4c639"
            icon={<ActionFIND color={fullWhite} />}
            label="Buscar"
            disabled={!this.state.keySource.length}
            labelColor={fullWhite}
          />
        </div>

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
                <TableRowColumn>{row.paidDate ? row.paidDate.toLocaleString('pt-br').slice(0, 10) :
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
      </div>
    );
  }
}

export default List;
