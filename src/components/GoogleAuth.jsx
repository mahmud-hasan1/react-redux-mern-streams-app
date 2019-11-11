import React, { Component } from "react";
import { connect } from 'react-redux'
import  { signIn, signOut  } from '../actions'

class GoogleAuth extends Component {
  componentDidMount() {
    // window.gapi.load("client:auth2", () => {
    //   window.gapi.client
    //     .init({
    //       clientId:
    //         "419870118551-kocv53qfo7rqcm4l3jrjp8is57feqqet.apps.googleusercontent.com",
    //       scope: "email"
    //     })
    //     .then(() => {
    //       this.auth = window.gapi.auth2.getAuthInstance();
    //       this.onAuthChange(this.auth.isSignedIn.get())
    //       this.auth.isSignedIn.listen(this.onAuthChange);          
    //     })
    //     .catch(err=>{
    //       console.log(err);
    //     })
    // });
  }
  
  onAuthChange = (isSignedIn) => {
    if(isSignedIn){
      this.props.signIn(this.auth.isSignedIn.get(), this.auth.currentUser.get().getId())
    } else {
      this.props.signOut(this.auth.isSignedIn.get())
    }
  };

  onSignInClick = () =>{
    this.auth.signIn()
  }
  onSignOutClick = () =>{
    this.auth.signOut()
  }
  
  renderAuthButton = () => {
    if (this.props.isSignedIn === null) return null;
    else if (this.props.isSignedIn) {
      return (
        <div>
          <button onClick={this.onSignOutClick}>Sign Out</button>
        </div>
      );
    } else if (!this.props.isSignedIn) {
      return (
        <div>
          <button onClick={this.onSignInClick}>SignIn with Google</button>
        </div>
      );
    }
  };

  render() {    
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps =(state)=>{
  return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);

