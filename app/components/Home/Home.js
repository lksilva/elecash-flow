// @flow
import React, { Component } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Paper from 'material-ui/Paper';

export default class Home extends Component {

  props: {
    serviceOrders: Array,
    getListServiceOrder: () => void
  }

  componentWillMount() {
    this.props.getListServiceOrder();
  }

  render() {
    console.log(this.props.serviceOrders);
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
                  <ListItem primaryText="All mail" secondaryText="Jan 28, 2014" rightIcon={<ActionInfo />} />
                  <ListItem primaryText="Trash" rightIcon={<ActionInfo />} />
                  <ListItem primaryText="Spam" rightIcon={<ActionInfo />} />
                  <ListItem primaryText="Follow up" rightIcon={<ActionInfo />} />
                </List>
              </Paper>
            </CardText>
          </Card>
          ))}
      </div>
    );
  }
}
