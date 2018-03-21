import * as actionTypes from './action-types';

export const dataVerification = (text) => ({
  type: actionTypes.ADD_TODO,
  payload: {
    text,
    result: false,
  },
});

