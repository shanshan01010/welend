import React, {Component} from 'react';
import { Route, Switch, hashHistory } from 'react-router-dom';

import Home from './home/index';
import Login from './login/index';

class Main extends Component {
  render() {
    return(
      <main>
        <Switch history={hashHistory}>
          <Route path='/home' component={ Home }/>
          <Route path='/login' component={ Login }/>
        </Switch>
      </main>
    )
  }
}

export default Main;