import React,{ Component } from "react" 
// import './App.css';
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from "firebase"
import Store from "../components/Stepper/Stepper.jsx" 

firebase.initializeApp({
  apiKey : "AIzaSyCANSSjdi5KaXENRuTvaLcORHxD2FCeazA",
  authDomain:"fir-auth-tutorial-66538.web.app"
})

class FirebaseAuth extends React.Component {
state = { isSingnedIn: false}
uiConfig = {
  signInFlow : "popup",
  signInOptions:[
    // firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.PhoneAuthProvider.PROVIDER_ID,
  ],
  callbacks : {
    signInSuccess : () => false,
  }
}

componentDidMount = () => {
  firebase.auth().onAuthStateChanged(user => {
    this.setState({isSingnedIn : !! user})
  })
}

  render() {

    return (
      <div className="App">
      {this.state.isSingnedIn ? (
          <Store />
        ) : (
          <StyledFirebaseAuth
          uiConfig={this.uiConfig}
          firebaseAuth= {firebase.auth()}
           />
          )}
    </div>
  );
}
}

export default FirebaseAuth;

