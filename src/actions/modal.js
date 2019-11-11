

import { SHOW_MODAL, HIDE_MODAL } from './types'


//? Modal Action.............
export const showModal = (object)=>{
  return { type: SHOW_MODAL, payload: object }
}

export const hideModal = ()=>{
  return { type: HIDE_MODAL, payload: false }
}
