import React from "react";
import ReactDOM from "react-dom";

import "./Modal.scss";

class Modal extends React.Component {
  constructor(){
    super()
    this.createRef = React.createRef()
  }

  componentDidMount() {
    let root  = this.createRef.current.parentElement.parentElement.querySelector('#root');
    this.root = root 
    this.root.classList.add('blur')   
  }
  
  onAcceptModal=()=>{
    this.props.onAcceptModal()
    this.root.classList.remove('blur');
  }

  onCancelModal=()=>{
    this.props.onCancelModal()
    this.root.classList.remove('blur');
  }
  
  undoBlur = () => {
    if(this.root.classList.contains('blur')){
      this.root.classList.remove('blur')
    }
    else {
      this.root.classList.add('blur')
    }
    
  }


  render() {
    const { title, children } = this.props;
    return ReactDOM.createPortal(
      <div onClick={this.onCancelModal} ref={this.createRef} className="modal_backdrop ">
        <div onClick={(e)=> e.stopPropagation()} className="modal">
          <div className="modal--modal_header">
            <h1>{title}</h1>
          </div>
          <div className="modal--modal_content">{children}</div>
          <div className="modal--modal_actions">
            <button onClick={this.onCancelModal}>Cancel</button>
            <button onClick={this.onAcceptModal}>Accept</button>
            <button onClick={this.undoBlur}>Blur</button>
          </div>
        </div>
      </div>,
      document.querySelector("#modal__root")
    );
  }
}

export default Modal;
