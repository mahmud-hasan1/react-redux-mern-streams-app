import React from "react";
import _ from 'lodash'
import { connect } from "react-redux";
import {  fetchStream, editStream } from "../../../actions/streams";
import StreamForm from "../StreamForm";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id)
  }
  
  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues, this.props.history);
  };

  goBack = () => {
    this.props.history.replace('/');
  };

  render() {  
    if(!this.props.stream) return null

    return (
      <div className="container">
        <span className="back_button" onClick={this.goBack}>
          <i className="fa fa-arrow-left" aria-hidden="true" />
        </span>
       <br/>
       <StreamForm initialValues={_.pick(this.props.stream, 'title', 'description')} onSubmit={this.onSubmit}/>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps)=>{
    
  return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);
