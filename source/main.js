'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Chat from './components/chat';

require("./assets/styles/app.scss");

ReactDOM.render(
  <Chat />,
  document.getElementById('chat')
);