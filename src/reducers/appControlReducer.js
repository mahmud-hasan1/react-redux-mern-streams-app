import _ from "lodash"

const INITIAL_STATE = {
  isModalShow: false,
  error: null,
  modalTitle: '',
  modalDescription: '',
  id: undefined,
  isLoading: undefined
}

export default (state=INITIAL_STATE, action)=>{

  switch(action.type){
    case "SHOW_MODAL": 
      return {...state, ..._.pick(action.payload, 'isModalShow', 'id', 'modalTitle', 'modalDescription')}

    case "HIDE_MODAL":     
      return {...state, isModalShow: action.payload}

    case "SHOW_LOADING":    
      return {...state, isLoading: action.payload}

    case "HIDE_LOADING":    
      return {...state, isLoading: action.payload}

    default:
      return state 
  }
}
