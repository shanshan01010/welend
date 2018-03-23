import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Login from '../login/index';

class Home extends Component {
  render() {
    return(
      <div>
        <div><Link to='/'>我是home</Link></div>
        <div>
          <Route path='/' Component={ Login }/>
        </div>
      </div>
      
    )
  }
}

export default Home;