// @flow
import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import styles from './Register.css';
import { Field } from 'redux-form';

const customStyle = {
  upperCase: {
    textTransform: 'uppercase'
  }
};

const stylezedTextField = ({
  input,
  style,
  floatingLabelText,
  inputStyle
}) => (
  <TextField
    style={style}
    floatingLabelText={floatingLabelText}
    inputStyle={inputStyle}
    {...input}
  />
);

class LensInformation extends Component {

  render() {
    return (
      <div>
        <Card>
          <CardHeader
            title="LONGE"
            subtitle="Informações referentes lentes para longe"
            actAsExpander
            showExpandableButton
          />
          <CardText expandable>
            <h5>OLHO DIREITO</h5>
            <div className={styles.card}>
              <Field
                floatingLabelText="GRAU ESFÉRICO OD"
                inputStyle={customStyle.upperCase}
                name="grau_esferico_od"
                component={stylezedTextField}
              />
              <Field
                floatingLabelText="CILINDRICO OD"
                inputStyle={customStyle.upperCase}
                name="cilindrico_od"
                component={stylezedTextField}
              />
              <Field
                floatingLabelText="EIXO OD"
                inputStyle={customStyle.upperCase}
                name="eixo_od"
                component={stylezedTextField}
              />
              <Field
                floatingLabelText="DNP OD"
                inputStyle={customStyle.upperCase}
                name="dpn_od"
                component={stylezedTextField}
              />
              <Field
                floatingLabelText="AP OD"
                inputStyle={customStyle.upperCase}
                name="ap_od"
                component={stylezedTextField}
              />
            </div>
            <h5>OLHO ESQUERDO</h5>
            <div className={styles.card}>
              <Field
                floatingLabelText="GRAU ESFÉRICO OE"
                inputStyle={customStyle.upperCase}
                name="grau_esferico_oe"
                component={stylezedTextField}
              />
              <Field
                floatingLabelText="CILINDRICO OE"
                inputStyle={customStyle.upperCase}
                name="cilindrico_oe"
                component={stylezedTextField}
              />
              <Field
                floatingLabelText="EIXO OE"
                inputStyle={customStyle.upperCase}
                name="eixo_oe"
                component={stylezedTextField}
              />
              <Field
                floatingLabelText="DNP OE"
                inputStyle={customStyle.upperCase}
                name="dpn_oe"
                component={stylezedTextField}
              />
              <Field
                floatingLabelText="AP OE"
                inputStyle={customStyle.upperCase}
                name="ap_oe"
                component={stylezedTextField}
              />
            </div>
          </CardText>
        </Card>

        <Card>
          <CardHeader
            title="PERTO"
            subtitle="Informações referentes lentes para perto"
            actAsExpander
            showExpandableButton
          />
          <CardText expandable>
            <h5>OLHO DIREITO</h5>
            <div className={styles.card}>
              <Field
                floatingLabelText="GRAU ESFÉRICO OD"
                inputStyle={customStyle.upperCase}
                name="grau_esferico_od_perto"
                component={stylezedTextField}
              />
              <Field
                floatingLabelText="CILINDRICO OD"
                inputStyle={customStyle.upperCase}
                name="cilindrico_od_perto"
                component={stylezedTextField}
              />
              <Field
                floatingLabelText="EIXO OD"
                inputStyle={customStyle.upperCase}
                name="eixo_od_perto"
                component={stylezedTextField}
              />
              <Field
                floatingLabelText="DNP OD"
                inputStyle={customStyle.upperCase}
                name="dpn_od_perto"
                component={stylezedTextField}
              />
              <Field
                floatingLabelText="AP OD"
                inputStyle={customStyle.upperCase}
                name="ap_od_perto"
                component={stylezedTextField}
              />
            </div>
            <h5>OLHO ESQUERDO</h5>
            <div className={styles.card}>
              <Field
                floatingLabelText="GRAU ESFÉRICO OE"
                inputStyle={customStyle.upperCase}
                name="grau_esferico_oe_perto"
                component={stylezedTextField}
              />
              <Field
                floatingLabelText="CILINDRICO OE"
                inputStyle={customStyle.upperCase}
                name="cilindrico_oe_perto"
                component={stylezedTextField}
              />
              <Field
                floatingLabelText="EIXO OE"
                inputStyle={customStyle.upperCase}
                name="eixo_oe_perto"
                component={stylezedTextField}
              />
              <Field
                floatingLabelText="DNP OE"
                inputStyle={customStyle.upperCase}
                name="dpn_oe_perto"
                component={stylezedTextField}
              />
              <Field
                floatingLabelText="AP OE"
                inputStyle={customStyle.upperCase}
                name="ap_oe_perto"
                component={stylezedTextField}
              />
            </div>
          </CardText>
        </Card>
      </div>
    );
  }

}
export default LensInformation;
