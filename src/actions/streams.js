import streams from "../apis/streams";

import { errorOccurred } from './error'
import { hideLoading } from './loading'
import {
  FETCH_STREAMS,
  FETCH_STREAM,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,

} from "./types";


//! Read All
export const fetchStreams = ()=>  async (dispatch)=>{
  try{
    const response = await streams.get('/streams')    
    dispatch({
      type: FETCH_STREAMS,
      payload: response.data
    })
  }
  catch(err){    
    let error = new Error()
    if(err.response && err.response.status === 404){
      error.statusCode = 404
      error.message = "404 Error Occurred......"
    } else {
      error.message = 'Network Error'
    }

    dispatch(errorOccurred(error))
  }


  //. when success fetch finished loading is hide. 
  dispatch(hideLoading())
}

//! Read Single
export const fetchStream = (id) => {
  return async function(dispatch, getState){
    const response = await streams.get(`/streams/${id}`)
    dispatch({
      type: FETCH_STREAM,
      payload: response.data
    })
  }
}

//!  Create
export const createStream = (formValues, history) => {
  return async function(dispatch, getState) {
    const { userId }  = getState().auth

    try{
      const response = await streams.post("/streams", {...formValues, userId });
      dispatch({
        type: CREATE_STREAM,
        payload: response.data
      }); 
      history.push('/') 
    } 
    catch(err){    

      let error = new Error()
      if(err.response && err.response.status === 404){
        error.statusCode = 404
        error.message = "404 Error Occurred......"
      } else {
        error.message = 'No Network Connection.'
      }
      dispatch(errorOccurred(error))
    }
  };
};

//! Edit
export const editStream = (id, formValues, history)=> {
  return async function(dispatch, getState){
    const userId = getState().auth.userId
    const response = await streams.put(`/streams/${id}`, {...formValues, userId})

    dispatch({
      type: EDIT_STREAM,
      payload : response.data
    })
    history.push('/')   
  }
}

//! DELETE
export const deleteStream = (id)=> async dispatch =>{
  await streams.delete(`/streams/${id}`)  
  dispatch({
    type: DELETE_STREAM,
    payload: id
  })
} 
