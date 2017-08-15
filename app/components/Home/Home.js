// @flow
import React, { Component } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Paper from 'material-ui/Paper';
import labels from './labels';

console.log(labels.address);
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
              <Paper zDepth={3} >
                <List>
                  {Object.keys(item).map((key, index) => {
                    if (key !== '_id' && key !== 'dateUser') {
                      return <ListItem key={index} primaryText={labels[key]} secondaryText={item[key]} rightIcon={<ActionInfo />} />;
                    }
                  }
                  )}
                </List>
              </Paper>
            </CardText>
          </Card>
          ))}
      </div>
    );
  }
}
