import * as actionTypes from './action-types';

export const dataVerification = (text, type) => ({
  type: actionTypes.DATA_VERIFICATION,
  payload: {
    text,
    type
  },
});

