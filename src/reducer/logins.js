import { createReducer } from 'redux-create-reducer';
import find from 'lodash/find';
import unionBy from 'lodash/unionBy';

import * as actionTypes from '../actions/action-types';

const initialState = [];

const login = createReducer(initialState, {
  [actionTypes.DATA_VERIFICATION]: (state, { payload }) => {
    if(payload.type === 'account') {
      if((/^[a-zA-Z][a-zA-Z0-9_]{5,16}$/.test(payload.text))) {
        state = '';
      }else {
        state = '请输入正确账号！';
      }
      return [state];
    }else if(payload.type ==='phone') {
      if((/^[1][3|5|6|7|8][0-9]{11}$/.test(payload.text))) {
        state = '';
      }else {
        state = '请输入正确密码！';
      }
      return [state];
    }else if(payload.type === 'password') {
      if((/^[a-zA-Z0-9!@#$%^&*]{5,16}$/.test(payload.text))) {
        state = '';
      }else {
        state = '请输入正确密码！';
      }
      return [state];
    }
    
  }
});

export default login;
