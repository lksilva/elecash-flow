// @flow
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import styles from './Register.css';
import DatePicker from 'material-ui/DatePicker';
import injectTapEventPlugin from 'react-tap-event-plugin';
import InputMask from 'react-input-mask';

injectTapEventPlugin();

const customStyle = {
  paddingDatePicker: {
    paddingTop: '24px'
  },
  fullRow: {
    flex: '1 100%',
    margin: '0 8px 0 8px',
  },
  upperCase: {
    textTransform: 'uppercase'
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
              type="number"
            />
            <TextField
              floatingLabelText="NÚMERO DO CLIENTE"
              type="number"
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
              inputStyle={customStyle.upperCase}
            />
            <TextField
              style={customStyle.fullRow}
              floatingLabelText="PAI"
              inputStyle={customStyle.upperCase}
            />
            <TextField
              style={customStyle.fullRow}
              floatingLabelText="MÃE"
              inputStyle={customStyle.upperCase}
            />
            <TextField
              floatingLabelText="RG"
              type="number"
            />
            <TextField
              floatingLabelText="ORG EXP"
              inputStyle={customStyle.upperCase}
            />
            <TextField floatingLabelText="CPF">
              <InputMask mask="999.999.999-99" />
            </TextField>
            <TextField floatingLabelText="DATA DE NASCIMENTO">
              <InputMask mask="99/99/9999" />
            </TextField>
            <TextField
              floatingLabelText="ENDEREÇO"
              inputStyle={customStyle.upperCase}
            />
            <TextField
              floatingLabelText="BAIRRO"
              inputStyle={customStyle.upperCase}
            />
            <TextField
              floatingLabelText="CIDADE"
              inputStyle={customStyle.upperCase}
            />
            <TextField
              floatingLabelText="UF"
              maxLength="2"
              inputStyle={customStyle.upperCase}
            />
            <TextField floatingLabelText="CEP">
              <InputMask mask="99999-9999" />
            </TextField>
            <TextField floatingLabelText="TELEFONE RESIDENCIAL">
              <InputMask mask="(99) 9999-9999" />
            </TextField>
            <TextField
              floatingLabelText="REFERÊNCIAL"
              inputStyle={customStyle.upperCase}
            />
            <TextField floatingLabelText="CELULAR">
              <InputMask mask="(99) 999999999" />
            </TextField>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
