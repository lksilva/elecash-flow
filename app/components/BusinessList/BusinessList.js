// @flow
import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';
import styles from './BusinessList.css';
import RegisterBusiness from './RegisterBusiness';
import List from './List';

// var something = remote.getGlobal('url');
// console.info('Somehewbdoue ', something);
type State = {
  slideIndex: number
};

class BusinessList extends Component<void, Props, State> {
  state: State;
  handleChange: Function;

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.payOff = this.payOff.bind(this);
  }

  componentWillMount() {
    this.props.getBusinessList();
  }

  handleChange(value: number) {
    this.setState({
      slideIndex: value,
    });
  }

  payOff(id: string) {
    this.props.pay(id);
  }

  render() {
    const isInstallmentPay = !!this.props.formValues && !!this.props.formValues.values && this.props.formValues.values.typePayment !== 'DN';
    return (
      <div className={styles.content}>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
          <Tab label="Lista de Vendas" value={0} />
          <Tab label="Cadastrar Venda" value={1} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <List business={this.props.business} payOff={this.payOff} />
          <RegisterBusiness
            installmentPay={isInstallmentPay}
            saveBusiness={this.props.saveBusiness}
          />
        </SwipeableViews>
      </div>
    );
  }
}

export default BusinessList;
