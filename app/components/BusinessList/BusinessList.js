// @flow
import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';
import styles from './BusinessList.css';

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
  }

  handleChange(value: number) {
    this.setState({
      slideIndex: value,
    });
  }

  render() {
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
          <div>
            <h2>Tabs with slide effect</h2>
            Swipe to see the next slide.<br />
          </div>
          <div>
            slide n°2
          </div>
        </SwipeableViews>
      </div>
    );
  }
}

export default BusinessList;
