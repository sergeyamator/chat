'use strict';

import React from 'react';
import Messages from './messages/messages';
import SendButton from './buttons/sendBtn';
import ClearInput from './buttons/clearInput';
import Input from './input/input';


class Chat extends React.Component {
  state = {
    data: this.props.messages
  };

  sendMessage = (text) => {

  };

  render() {
    return(
      <div className="chat">
        <Messages data={this.state.data} />
        <form>
          <Input />
          <div className="buttons">
            <SendButton send={this.sendMessage()} />
            <ClearInput />
          </div>
        </form>
      </div>
    );
  }
}

export default Chat;