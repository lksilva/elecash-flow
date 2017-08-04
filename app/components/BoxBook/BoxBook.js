// @flow
import React, { Component } from 'react';
import { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn }
  from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
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
    bottom: '20px',
    boxShadow: 'none',
  }
};

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

  handleInput(payload: object) {
    this.props.saveBoxBook(payload);
    this.setState({ showInput: !this.state.showInput });
  }

  render() {
    const date = new Date();
    const today = `${date.getMonth() + 1} / ${date.getFullYear()}`;
    const { boxBooks } = this.props;
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
            {boxBooks.map((row, index) => (
              <TableRow key={index}>
                <TableRowColumn>{row.dateBoxBook.toLocaleString('pt-br').slice(0, 10)}</TableRowColumn>
                <TableRowColumn>{row.description}</TableRowColumn>
                <TableRowColumn>{row.input}</TableRowColumn>
                <TableRowColumn>{row.output}</TableRowColumn>
                <TableRowColumn>{row.balance}</TableRowColumn>
              </TableRow>
              ))}
            {this.state.showInput &&
              <Input handleInput={this.handleInput} />
            }
          </TableBody>
          {/* <TableFooter
            adjustForCheckbox={false}
          >
            <TableRow>
              <TableRowColumn>ID</TableRowColumn>
              <TableRowColumn>Name</TableRowColumn>
              <TableRowColumn>Status</TableRowColumn>
            </TableRow>
          </TableFooter> */}
        </Table>
        {!this.state.showInput &&
          <FloatingActionButton mini style={styles.floatButton} onClick={this.handleInput}>
            <ContentAdd />
          </FloatingActionButton>
        }
      </div>
    );
  }
}

export default BoxBook;
