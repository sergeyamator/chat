'use strict';

import React from 'react';
import Messages from './messages/messages';
import SendButton from './buttons/sendBtn';
import ClearBtn from './buttons/clearBtn';
import Input from './input/input';


class Chat extends React.Component {
  state = {
    data: this.props.messages,
    currentUser: localStorage.getItem('currentUser') || 'first'
  };

  sendMessage = (e) => {
    e.preventDefault();

    let data = this.state.data;
    let input = document.querySelector('input');
    let message = input.value;

    if (!message) return;

    if (this.state.currentUser === 'first') {
      data[0].messages.push(message);

      this.setState({
        data: data,
        currentUser: 'second'
      }, saveToLocalStorage);
    } else {
      data[1].messages.push(message);

      this.setState({
        data: data,
        currentUser: 'first'
      }, saveToLocalStorage);
    }

    input.value = '';

    function saveToLocalStorage() {
      localStorage.setItem('messages', JSON.stringify(data));
      localStorage.setItem('currentUser', this.state.currentUser);
    }
  };

  resetChat = () => {
    let data = [
      {
        name: 'Sergey',
        messages: []
      },
      {
        name: 'Dima',
        messages: []
      }
    ];

    localStorage.setItem('messages', JSON.stringify(data));
    localStorage.setItem('currentUser', 'first');

    this.setState({
      data: data
    });
  };

  render() {
    return (
      <div className="chat">
        <Messages data={this.state.data}/>
        <form action="#" method="POST" onSubmit={this.sendMessage}>
          <Input />
          <div className="buttons">
            <SendButton />
            <ClearBtn class="clear-button" type="reset" text="Очистить поле ввода"/>
            <div className="clear-chat">
              <ClearBtn type="button" clear={this.resetChat} text="Очистить чат"/>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Chat;