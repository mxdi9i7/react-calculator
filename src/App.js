import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Button from './components/Button';
import Screen from './components/Screen';
import StatusBar from './components/StatusBar';

import './App.css';
import './styles/Font.css'

const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenValue: 0,
    }
  }
  
  render() {
    return (
      <div className="App">
        <div className="calculator">
          <StatusBar/>
          <div className="interaction-container">
            <Screen value={this.state.screenValue}/>
            <Container className={"buttons-group"}>
              <Row justify={'between'}>
                <Col
                  style={{
                    paddingLeft: '5px',
                    paddingRight: 0,
                  }}
                  xs={9}
                  sm={9}
                  lg={9}
                  className={"left-buttons-group"}
                >
                  <div className="helper-buttons">
                    <Button value={'AC'} />
                    <Button value={'±'} />
                    <Button value={'%'} />
                  </div>
                  <div className="number-buttons">
                    {
                      numbers.map(item => (
                        <Button
                          value={item}
                          key={Math.random()}
                        />
                      ))
                    }
                  </div>
                  <div className="bottom-buttons">
                    <Button isLonger value={0}/>
                    <Button value={'.'}/>
                  </div>
                </Col>
                <Col
                  xs={3}
                  sm={3}
                  lg={3}
                  style={{
                    paddingLeft: 0,
                    paddingRight: '5px',
                  }}
                  className={"operator-buttons"}
                >
                  <Button value={'÷'} />
                  <Button value={'×'}/>
                  <Button value={'﹣'}/>
                  <Button value={'﹢'}/>
                  <Button value={'＝'}/>
                </Col>
              </Row>
            </Container>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
