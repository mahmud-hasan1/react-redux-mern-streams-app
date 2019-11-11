import React from "react";
import { connect } from "react-redux";

import { componentDestroyed } from "../../../actions";
import { fetchStreams, deleteStream, } from "../../../actions/streams";
import { showModal, hideModal } from "../../../actions/modal";
import { showLoading } from "../../../actions/loading";


import { Link } from "react-router-dom";

import Modal from "../../../partials/Modal/Modal";
import Loader from '../../Loader/Loader'

import "./StremeList.scss";

class StreamList extends React.Component {

  componentDidMount() {
    this.props.showLoading()
    this.props.fetchStreams();
  }


  // Delete Stream.....
  clickDeleteButton = id => {
    let modalTitle = "Stream Delete"
    let modalDescription = "Are You sure to Delete this ?"
    let isModalShow = true
    this.props.showModal({isModalShow, modalTitle, modalDescription, id})
  };
  handleAcceptModal = ()=>{
    this.props.deleteStream(this.props.appControl.id)
    this.props.hideModal()
  }
  handleCancelModal = ()=>{
    this.props.hideModal()
  }
  //End..........


  // Buttons Render
  renderActions = stream => {
    return stream.userId === this.props.currentUserId ? (
      <div className="actions">
        <button>
          <Link to={`/streams/edit/${stream._id}`}>Edit</Link>
        </button>
        <button onClick={() => this.clickDeleteButton(stream._id)}>Delete</button>
      </div>
    ) : null;
  };

  //! Render Stream List.....
  renderList = () => {
    return this.props.streams.length > 0 ?
      <div className="streams_list">
        { this.props.streams.map(stream => {
          return (
            <div className="streams_list_item" key={stream._id}>
              <div className="left">
                <div className="icon">
                  <i className="fa fa-camera" />
                </div>
              </div>
              <div className="right">
                <div className="content">
                  <h3>{stream.title}</h3>
                  <p>{stream.description}</p>
                </div>
                {this.renderActions(stream)}
              </div>
            </div>
          );
      })
    } 
    </div> : null
  } 

  renderTitle = ()=> {
    let title;
    if(this.props.errorMessage.message) return title = this.props.errorMessage.message
    else if( this.props.appControl.isLoading && this.props.streams.length <= 0) return title = "Loading......."
    else if(!this.props.appControl.isLoading && this.props.streams.length <= 0) return title = "No Data Found"
    else return title= "All Streams"
  }
  

  componentWillUnmount(){
    this.props.componentDestroyed()
  }


  render() {      
    return (
      <div className='container'>
        {this.props.appControl.isLoading ? <Loader/> : null}

        <h2>{this.renderTitle()} </h2>
        
        {this.props.appControl.isModalShow && (
          <Modal
            onCancelModal={this.handleCancelModal}
            onAcceptModal={this.handleAcceptModal}
            title={this.props.appControl.modalTitle}
          ><p>{this.props.appControl.modalDescription}</p>
          </Modal>
        )}

        {this.renderList()}
        
      </div>
    );
  }
}


const mapStateToProps = state => {  
  return {
    streams: Object.values(state.streams, '_id'),
    currentUserId: state.auth.userId,
    appControl: state.appControl,
    errorMessage: state.errorMessage
  };
};

export default connect(
  mapStateToProps,
  { fetchStreams, deleteStream, showModal, hideModal, showLoading, componentDestroyed }
)(StreamList);
