

import {
  SIGN_IN,
  SIGN_OUT,

  ERROR_OCCUR
} from "./types";


export const signIn = (isSignedIn, userId) => {
  return {
    type: SIGN_IN,
    payload: { isSignedIn, userId }
  };
};

export const signOut = isSignedIn => {
  return {
    type: SIGN_OUT,
    payload: { isSignedIn }
  };
};

export const componentDestroyed = () =>  dispatch =>{
  let error = {}
  error.message = ''
  return dispatch({
    type: ERROR_OCCUR,
    payload: error
  })
}



