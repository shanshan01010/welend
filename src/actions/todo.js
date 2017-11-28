import * as actionTypes from './action-types';

export const addTodo = (text) => ({
  type: actionTypes.ADD_TODO,
  payload: {
    id: Date.now(),
    text,
    completed: false,
  },
});

export const toggleCompleted = (id, completed) => ({
  type: actionTypes.TOGGLE_COMPLETED,
  payload: {
    id,
    completed,
  },
})
