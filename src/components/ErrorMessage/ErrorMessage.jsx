import React from 'react'
import './ErrorMessage.css'

const ErrorMessage = (props) => {
  return (
    <div className="container">
      { props.error && (
          <div className="error">
            <span className="error-message">{props.error.errorMessage}</span>
            <span onClick={props.onErrorHandler} className="error-close">x</span>
          </div>
      ) }
    </div>
  )
}


export default ErrorMessage
