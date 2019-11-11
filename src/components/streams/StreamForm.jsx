import React from "react";
import { Field, reduxForm } from "redux-form";

import '../SearchBar/SearchBar.css'

class StreamForm extends React.Component {

  renderError = ({error, touched})=>{
    if(error && touched){
      return (
        <div className="form_error_message">{error}</div>
      )
    }
  }

  renderInput = formProps => {    
    return (
      <div className="field">
        <label htmlFor="">{formProps.label}</label>
        <input autoComplete="off" className="input" {...formProps.input} />
        { this.renderError(formProps.meta) }
      </div>
    );
  };

  onSubmit=(formValues)=>{
    this.props.onSubmit(formValues)
  }

  render() {        
    return (
      <div className="container">
        <form className='search-picture' onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field 
          name="title" 
          component={this.renderInput} 
          label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="search-button" type="submit">Submit</button>
      </form>
      </div>
    );
  }
}

const validate = (formValues) =>{
  let errors = {}
  if(!formValues.title){
    errors.title = "Please Enter Title"
  }
  if(formValues.title){
    formValues.title.trim().length < 3 ? 
    errors.title = "Title must be larger than 3 chracter" : ''
  }

  if(!formValues.description){
    errors.description = "Please Enter Description"
  }
  if(formValues.description){
    formValues.description.trim().length < 3 ? 
    errors.description = "description must be larger than 3 chracter" : ''
  }
  return errors
}

export default reduxForm({
  form: "streamForm",
  validate
})(StreamForm);
