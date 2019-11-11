
import { HIDE_LOADING, SHOW_LOADING } from './types'


export const showLoading = () =>{
  return {
    type: SHOW_LOADING,
    payload: true
  }
}

// export const dispatchHideLoading = (dispatch) =>{
//   console.log("HIDE_LOADING");
//   dispatch({
//     type: HIDE_LOADING,
//     payload: false
//   })
// }

export const hideLoading = ()=>{
  console.log(HIDE_LOADING);
  return { type: HIDE_LOADING, payload: false }
}
