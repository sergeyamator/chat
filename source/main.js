'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Chat from './components/chat';

require("./assets/styles/app.scss");

let data = [
  {
    name: 'Sergey',
    messages: ['Привет', 'Как дела?']
  },
  {
    name: 'Dima',
    messages: ['Привет', 'Хорошо']
  }
];

ReactDOM.render(
  <Chat messages={data} />,
  document.getElementById('chat')
);