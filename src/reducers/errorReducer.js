
import { ERROR_OCCUR } from "../actions/types";

const INITIAL_STATE = {
  errorMessage: undefined
}
    
export default (state=INITIAL_STATE, action)=>{
  switch(action.type){
    case ERROR_OCCUR:     
      return {...state,  ...action.payload}

    default:
      return state  
  }
}
