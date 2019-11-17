import React, { Component } from "react";
import fire from "config/firebase";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Form, Button } from "semantic-ui-react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

import { closeModalAction } from "store/actions/signupAction";
import signInUserAction from "store/actions/signInUserAction";
import { relative } from "upath";

class SigninForm extends Component {
  state = {
    email: "",
    password: "",
    user: {}
  };

  uiConfig = {
    signInFlow: "popup",
    signInOptions: [fire.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccess: () => false
    }
  };

  componentDidMount() {
    this.attachAuthListener();
  }

  attachAuthListener() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.email, this.state.password);
    this.props.signInUserAction(this.state);
  };

  handleSignout = () => {
    fire.auth().signOut();
    this.props.closeModalAction();
    this.props.history.push("/");
  };

  render() {
    const { error } = this.props;
    const submitButton = {
      fontWeight: 500,
      height: "40px",
      lineHeight: "normal",
      maxWidth: "80px",
      minHeight: "40px",
      padding: "8px 16px",
      textAlign: "left",
      width: "70%",
      marginTop: "17px"
    };
    return (
      <>
        {this.state.user ? (
          <>
            <div>You are logged in successfully</div>
            <button onClick={this.handleSignout}>Sing out</button>
          </>
        ) : (
          <form onSubmit={this.handleSubmit}>
            <input
              fluid
              placeholder="Email"
              id="email"
              onChange={this.handleChange}
            />

            <input
              fluid
              placeholder="Password"
              id="password"
              onChange={this.handleChange}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between"
              }}
            >
              <Button style={submitButton}>Submit</Button>
              <StyledFirebaseAuth
                style={{}}
                uiConfig={this.uiConfig}
                firebaseAuth={fire.auth()}
              />
            </div>
          </form>
        )}
      </>
    );
  }
}

const mapPropsToState = state => {
  console.log(state);
  return {
    error: state.error
  };
};

const mapDispatchToProps = dispatch => ({
  closeModalAction: () => dispatch(closeModalAction()),
  signInUserAction: credential => dispatch(signInUserAction(credential))
});

export default withRouter(
  connect(mapPropsToState, mapDispatchToProps)(SigninForm)
);
