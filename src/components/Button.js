import React, {Component} from 'react';
import '../styles/Button.css';

class Button extends Component {
  render() {
    const classList = [
      'btn',
      this.props.isLonger ? 'longer' : '',
    ]
    return (
      <div className={classList.join(' ')}>
        {this.props.value}
      </div>
    );
  }
}

export default Button;