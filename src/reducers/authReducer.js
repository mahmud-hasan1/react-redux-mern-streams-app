
const INITIAL_STATE  = {
  isSignedIn: null,
  userId: "5dc40643b87078099460d6d2"
}

export default (state = INITIAL_STATE, action)=>{
  switch(action.type){
    case "SIGN_IN":
      return {
        ...state, 
        isSignedIn: action.payload.isSignedIn,
        userId: action.payload.userId 
      }

    case "SIGN_OUT":
      return {...state, isSignedIn: action.payload.isSignedIn, userId: null}

    default:
      return state
  }
}