import React, { Component } from 'react';
import './App.css';
import { MyCars } from './components/MyCars';

class App extends Component {
  state = {
    title: " First Cars's Catalog",
    color: '#f1aadd',
  };

  render() {
    return (
      <div className='App'>
        <MyCars color={this.state.color} title={this.state.title}></MyCars>
      </div>
    );
  }
}

export default App;
