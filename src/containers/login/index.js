import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import createHistory from "history/createBrowserHistory"

import login from '../../reducer/logins';
import * as actionCreators from '../../actions/login';
import axios from 'axios';

import { Button, Input} from '@icedesign/base';
import Home from '../home/';

import './index.less';

const history = createHistory({'forceRefresh' : true });

@connect(
  state => ({
    logins: state.logins,
  }),
  dispatch => (bindActionCreators(actionCreators, dispatch))
)
class Login extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      errorMsg: '',
      veri: '1234',
      username: {
        value: '',
        state: false
      },
      password: {
        value: '',
        state: false
      },
      token: 'DNGEOIEHJEO1546546',
      loginState: false
    }
  }

  componentDidMount = () => {
  }
  onUserNameBlur = ( event ) => {
    if(!(/^[a-zA-Z][a-zA-Z0-9_]{5,16}$/.test(event.target.value))) {
      this.setState({
        errorMsg: '请输入正确的账号！'
      })
    }else {
      this.setState({
        errorMsg: '',
        username: {
          value: event.target.value,
          state: true
        }
      })
    }
  }
  onPasswordBlur = ( event ) => {
    if(!(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(event.target.value))) {
      this.setState({
        errorMsg: '请输入正确的密码！'
      })
    }else {
      this.setState({
        errorMsg: '',
        password: {
          value: event.target.value,
          state: true
        }
      })
    }
  }
  onVerificationBlur = ( event ) => {
    if(!event.target.value === this.state.veri) {
      this.setState({
        errorMsg: '验证码不正确！'
      })
    }else {
      this.setState({
        errorMsg: '',
        loginState: true
      })
    }
  }
  onLoginClick = () => {
    if(this.state.username.state && this.state.password.state) {
      //跳转到home
      history.push('/home');
    }else {
      //原地跳转  
      history.push('/');
    }
  }

  render() {
    return (
      <div className='Login'>
        <ul>
          <li><span className='icon'></span><Input className='Input' onBlur={this.onUserNameBlur.bind(this)} /></li>
          <li><span className='icon'></span><Input className='Input' htmlType='password' onBlur={this.onPasswordBlur.bind(this)} /></li>
          <li><span className='icon'></span><Input className='Input' onBlur={this.onVerificationBlur.bind(this)} /><span className='veri'></span></li>
          <p>{ this.state.errorMsg }</p>
          <li><button className='Button'  onClick={this.onLoginClick}>登 录</button></li>
        </ul>
      </div>
    );
  }
};

export default Login;
