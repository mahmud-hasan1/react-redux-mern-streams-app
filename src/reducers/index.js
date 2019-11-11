
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import authReducer from './authReducer'
import streamsReducer from './streamsReducer'
import appControlReducer from './appControlReducer'
import errorReducer from './errorReducer'


export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamsReducer,
  appControl: appControlReducer,
  errorMessage: errorReducer
})