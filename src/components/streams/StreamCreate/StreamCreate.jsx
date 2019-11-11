import React from "react";

import { connect } from "react-redux";
import { componentDestroyed } from "../../../actions";
import { createStream } from "../../../actions/streams";
import StreamForm from '../StreamForm'

import "../../SearchBar/SearchBar.css";

class StreamCreate extends React.Component {   
  onSubmit = formValues => {
    this.props.createStream(formValues, this.props.history);
  };

  goBack = () => {
    this.props.history.goBack();
  };

  componentWillUnmount(){
    this.props.componentDestroyed()
  }

  render() {        
    return (
      <div className="container">
        <span className="back_button" onClick={this.goBack}>
          <i className="fa fa-arrow-left" aria-hidden="true"></i>
        </span>
        <br/>
        <h3>Create a Stream</h3>
        {this.props.errorMessage.message && (
          <h3>{this.props.errorMessage.message}</h3>
        )}
        <StreamForm onSubmit={this.onSubmit}/>
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return {
    errorMessage: state.errorMessage
  }
}

export default connect( mapStateToProps, { createStream, componentDestroyed })(StreamCreate);
