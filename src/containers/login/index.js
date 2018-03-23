import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import { Link, Route  } from 'react-router-dom';
import login from '../../reducer/logins';
import * as actionCreators from '../../actions/login';

import { Button, Input} from '@icedesign/base';
import Home from '../home/index';

import './index.less';

@connect(
  state => ({
    logins: state.logins,
  }),
  dispatch => (bindActionCreators(actionCreators, dispatch))
)
class Login extends Component {
  constructor( props, context ) {
    super( props, context )
    this.state = {
      loginin: false
    }
  }
  onUserNameBlur = ( event ) => {
    this.props.dataVerification( event.target.value, 'account' );
  }
  onPasswordBlur = ( event ) => {
    this.props.dataVerification( event.target.value, 'password' );
  }
  onVerificationBlur = () => {

  }

  onLoginClick = () => {
    console.log(window.location.href);
  }

  render() {
    const { logins } = this.props;
    return (
      <div className='Login'>
        <ul>
          <li><span className='icon'></span><Input className='Input' onBlur={this.onUserNameBlur.bind(this)} /></li>
          <li><span className='icon'></span><Input className='Input' htmlType='password' onBlur={this.onPasswordBlur.bind(this)} /></li>
          <li><span className='icon'></span><Input className='Input' onBlur={this.onVerificationBlur.bind(this)} /><span className='veri'></span></li>
          <p>{logins[0]}</p>
          <li><button className='Button'  onClick={this.onLoginClick}><Link to='/home'>登 录</Link></button></li>
        </ul>
      </div>
    );
  }
};

export default Login;
