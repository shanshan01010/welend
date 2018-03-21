import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Button, Input} from '@icedesign/base';

import * as actionCreators from '../../actions/login';

import login from '../../reducer/logins';

import './index.less';

@connect(
  state => ({
    logins: state.logins,
  }),
  dispatch => (bindActionCreators(actionCreators, dispatch))
)
class Login extends Component {
  constructor( props, context ) {
    super( props, context );
    this.state = {}
  }
 
  onUserNameBlur (event)  {
   // console.log('lalal')
    this.props.dataVerification( event.target.value );
  }
  onPasswordBlur (){

  }
  onVerificationBlur () {

  }

  render() {
    const { logins } = this.props;
    return (
      <div className='Login'>
        <ul>
          <li><span></span><Input className='Input' onBlur={this.onUserNameBlur.bind(this)} /></li>
          <p>{logins[0]}</p>
          <li><span></span><Input className='Input' onBlur={this.onPasswordBlur.bind(this)} /></li>
          <p></p>
          <li><span></span><Input className='Input' onBlur={this.onVerificationBlur.bind(this)} /></li>
          <p></p>
          <li><Button  type="normal" component="a" target="_blank" onClick={this.clicked}>点击</Button></li>
          <p></p>
        </ul>
      </div>
    );
  }
};

export default Login;
