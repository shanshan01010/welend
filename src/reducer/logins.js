import { createReducer } from 'redux-create-reducer';
import find from 'lodash/find';
import unionBy from 'lodash/unionBy';

import * as actionTypes from '../actions/action-types';

const initialState = [];

const login = createReducer(initialState, {
  [actionTypes.ADD_TODO]: (state, { payload }) => {
    if((/^[a-zA-Z][a-zA-Z0-9_]{6,16}$/.test(payload.text))) {
      state = '';
    }else {
      state = '请输入正确账号！';
    }
    return [state];
  }
});

export default login;
