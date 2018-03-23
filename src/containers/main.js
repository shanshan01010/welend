import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './home/index';
import Login from './login/index';

class Main extends Component {
  render() {
    return(
      <main>
        <Switch>
          <Route path='/home' Component={ Home }/>
          <Route path='/' Component={ Login }/>
        </Switch>
      </main>
    )
  }
}

export default Main;