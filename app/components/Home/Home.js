// @flow
import React, { Component } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';

export default class Home extends Component {

  props: {
    serviceOrders: Array,
    getListServiceOrder: () => void
  }

  componentWillMount() {
    this.props.getListServiceOrder();
  }

  render() {
    return (
      <div>
        {this.props.serviceOrders.map((item, index) => (
          <Card key={index}>
            <CardHeader
              title={`TSO: ${item.tso}`}
              subtitle={`CLIENTE: ${item.name} ${item.dateUser ? item.dateUser.toLocaleString('pt-br') : ''}`}
              actAsExpander
              showExpandableButton
            />
            <CardText expandable>
              <h5>OLHO DIREITO</h5>
            </CardText>
          </Card>
          ))}
      </div>
    );
  }
}
