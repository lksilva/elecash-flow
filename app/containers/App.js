// @flow
import React, { Component } from 'react';
import type { Children } from 'react';
// import Header from '../components/Header/Header';
import HeaderPage from './HeaderPage';

export default class App extends Component {
  props: {
    children: Children
  };

  render() {
    return (
      <div className="container">
        <HeaderPage />
        {this.props.children}
      </div>
    );
  }
}
