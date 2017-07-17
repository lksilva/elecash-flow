// @flow
import React, { Component } from 'react';
import type { Children } from 'react';
import Header from './Header';

export default class App extends Component {
  props: {
    children: Children
  };

  render() {
    return (
      <div className="container">
        <Header />
        {this.props.children}
      </div>
    );
  }
}
