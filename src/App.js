import React, { Component } from 'react';
import cookie from 'react-cookies';

import Login from './containers/login/index';
import Home from './containers/home/index';
import Main from './containers/main';
import './components/base.css'

class App extends Component {
  render() {
    return(
      <div>
        <Login />
        <Main />
      </div>
    )
  }
}

export default App;
