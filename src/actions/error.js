import { ERROR_OCCUR } from './types'

export const errorOccurred = error=>{
  return {
    type: ERROR_OCCUR,
    payload: error
  }
}
