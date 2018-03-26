import React, { Component } from 'react';
import cookie from 'react-cookies';
import { Switch, Route } from 'react-router-dom';

import Login from './containers/login';
import Home from './containers/home';
import './components/base.css'

class App extends Component {
  render() {
    return(
      
      <Switch>
        <Route path='/home' component={ Home }/>
        <Route path='/' component={ Login }/>
      </Switch>
      
    )
  }
}

export default App;