// @flow
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import styles from './Register.css';
import DatePicker from 'material-ui/DatePicker';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const customStyle = {
  paddingDatePicker: {
    paddingTop: '24px'
  },
  fullRow: {
    flex: '1 100%',
    margin: '0 8px 0 8px'
  }
};

class Register extends Component {

  formatDate(date) {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }

  render() {
    return (
      <div>
        <h3 className={styles.center}>ORDEM DE SERVIÇO</h3>
        <form className={styles.form}>
          <div className={styles.card}>
            <TextField
              floatingLabelText="TSO"
            />
            <TextField
              floatingLabelText="NÚMERO DO CLIENTE"
            />
            <DatePicker
              floatingLabelText="DATA"
              hintText="DATA"
              container="inline"
              formatDate={this.formatDate}
            />
            <TextField
              style={customStyle.fullRow}
              floatingLabelText="NOME"
            />
            <TextField
              style={customStyle.fullRow}
              floatingLabelText="PAI"
            />
            <TextField
              style={customStyle.fullRow}
              floatingLabelText="MÃE"
            />
            <TextField
              floatingLabelText="RG"
            />
            <TextField
              floatingLabelText="ORG EXP"
            />
            <TextField
              floatingLabelText="CPF"
            />
            <TextField
              floatingLabelText="DATA DE NASCIMENTO"
            />
            <TextField
              floatingLabelText="ENDEREÇO"
            />
            <TextField
              floatingLabelText="BAIRRO"
            />
            <TextField
              floatingLabelText="CIDADE"
            />
            <TextField
              floatingLabelText="UF"
            />
            <TextField
              floatingLabelText="CEP"
            />
            <TextField
              floatingLabelText="TELEFONE RESIDENCIAL"
            />
            <TextField
              floatingLabelText="REFERÊNCIAL"
            />
            <TextField
              floatingLabelText="CELULAR"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
