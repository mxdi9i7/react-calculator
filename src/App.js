import React, { Component } from 'react';
import Button from './components/Button';
import Screen from './components/Screen';
import StatusBar from './components/StatusBar';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <StatusBar/>
        <Screen/>
        <Button />
      </div>
    );
  }
}

export default App;
