import React, { Component } from 'react';
import { TableRow, TableRowColumn }
  from 'material-ui/Table';
import ActionOK from 'material-ui/svg-icons/action/done';

class List extends Component {

  props: {
    business: Array
  }

  render() {
    return (
      <div>
        {this.props.business.map(item => item.clientName)}
      </div>
    );
  }
}

export default List;
