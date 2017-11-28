import { createReducer } from 'redux-create-reducer';
import find from 'lodash/find';
import unionBy from 'lodash/unionBy';

import * as actionTypes from '../actions/action-types';

const initialState = [];

const todo = createReducer(initialState, {
  [actionTypes.ADD_TODO]: (state, { payload }) => {
    state.push(payload);
    return [...state];
  },
  [actionTypes.TOGGLE_COMPLETED]: (state, { payload }) => {
    const todo = find(state, todo => todo.id === payload.id);
    console.log(todo);
    todo.completed = !todo.completed;
    state = unionBy(state, [todo], 'id');
    return [...state]
  }
});

export default todo;
