// @flow
import React, { Component } from 'react';
import { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn }
  from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/clear';
import Input from './Input';

const styles = {
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
  floatButton: {
    display: 'flex',
    justifyContent: 'flex-end',
    position: 'relative',
    bottom: '71px',
    boxShadow: 'none',
  }
};

const tableData = [
  {
    name: 'John Smith',
    status: 'Employed',
    selected: true,
  },
  {
    name: 'Randal White',
    status: 'Unemployed',
  },
  {
    name: 'Stephanie Sanders',
    status: 'Employed',
    selected: true,
  },
  {
    name: 'Steve Brown',
    status: 'Employed',
  },
  {
    name: 'Joyce Whitten',
    status: 'Employed',
  },
  {
    name: 'Samuel Roberts',
    status: 'Employed',
  },
  {
    name: 'Adam Moore',
    status: 'Employed',
  },
];

type State = {
  showInput: boolean
};

class BoxBook extends Component<void, Props, State> {
  state: State;
  handleInput: Function;

  constructor() {
    super();
    this.state = {
      showInput: false,
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput() {
    this.setState({ showInput: !this.state.showInput });
  }

  render() {
    const date = new Date();
    const today = `${date.getMonth() + 1} / ${date.getFullYear()}`;
    return (
      <div>
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
              <TableHeaderColumn colSpan="5" style={{ textAlign: 'center' }}>
                {`Livro caixa do mês ${today}`}
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn tooltip="Data">Data</TableHeaderColumn>
              <TableHeaderColumn tooltip="Descrição">Descrição</TableHeaderColumn>
              <TableHeaderColumn tooltip="Entrada">Entrada</TableHeaderColumn>
              <TableHeaderColumn tooltip="Saída">Saída</TableHeaderColumn>
              <TableHeaderColumn tooltip="Saldo">Saldo</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {tableData.map((row, index) => (
              <TableRow key={index} selected={row.selected}>
                <TableRowColumn>{index}</TableRowColumn>
                <TableRowColumn>{row.name}</TableRowColumn>
                <TableRowColumn>{row.status}</TableRowColumn>
                <TableRowColumn>{row.name}</TableRowColumn>
                <TableRowColumn>{row.status}</TableRowColumn>
              </TableRow>
              ))}
            {this.state.showInput &&
              <Input />}
          </TableBody>
          <TableFooter
            adjustForCheckbox={false}
          >
            <TableRow>
              <TableRowColumn>ID</TableRowColumn>
              <TableRowColumn>Name</TableRowColumn>
              <TableRowColumn>Status</TableRowColumn>
            </TableRow>
          </TableFooter>
        </Table>
        <FloatingActionButton mini style={styles.floatButton} onClick={this.handleInput}>
          {!this.state.showInput ? <ContentAdd /> : <ContentRemove />}
        </FloatingActionButton>
      </div>
    );
  }
}

export default BoxBook;
