import React, { Component } from 'react';
import action from './actions';
import {  connect } from 'react-redux';

class App extends Component {
  
  render() {
    this.props.action()
    return (
      <div>heloo</div>
    );
  }
}


export default connect(null, { action })(App);
