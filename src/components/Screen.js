import React, {Component} from 'react';
import '../styles/Screen.css';

class Screen extends Component {
  render() {
    return (
      <div className={'screen'}>
        {this.props.value}
      </div>
    );
  }
}

export default Screen;