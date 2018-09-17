import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Button from './components/Button';
import Screen from './components/Screen';
import StatusBar from './components/StatusBar';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="calculator">
          <StatusBar/>
          <Screen/>
          <Container className={"buttons-group"}>
            <Row>
              <Col className={"left-buttons-group"}>
                <div className="helper-buttons">
                  <Button />
                  <Button />
                  <Button />
                </div>
                <div className="number-buttons"></div>
              </Col>
              <Col className={"right-buttons-group"}>
                <Button />
                <Button />
                <Button />
                <Button />
              </Col>
            </Row>
          </Container>
          
        </div>
      </div>
    );
  }
}

export default App;
