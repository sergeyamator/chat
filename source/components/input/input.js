import React from 'react';
require('./input.scss');

class Input extends React.Component {
  render() {
    return (
      <label className="input">
        <input placeholder="Введите сообщение"/>
      </label>
    );
  }
}

export default Input;