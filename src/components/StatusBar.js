import React, {Component} from 'react';
import signal from '../assets/signal.png';
import wifi from '../assets/wifi.png';
import battery from '../assets/battery.png';
import lock from '../assets/lock.png';
import '../styles/Status.css';

class StatusBar extends Component {
  render() {
    return (
      <div className={"status-bar"}>
        <div className="status">
          <img src={signal} alt=""/>
          <img src={wifi} alt=""/>
        </div>
        <div className="time">12:28</div>
        <div className="battery">
          <img className={"battery"} src={battery} alt=""/>
        </div>
      </div>
    );
  }
}

export default StatusBar;