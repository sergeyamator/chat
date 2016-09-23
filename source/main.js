'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Chat from './components/chat';

require("./assets/styles/app.scss");

let data = localStorage.getItem('messages');

if (!data) {
  data = [
    {
      name: 'Sergey',
      messages: ['']
    },
    {
      name: 'Dima',
      messages: ['']
    }
  ];
} else {
  data = JSON.parse(localStorage.getItem('messages'))
}


ReactDOM.render(
  <Chat messages={data}/>,
  document.getElementById('chat')
);