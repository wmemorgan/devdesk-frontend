import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { Redirect } from "react-router-dom";
import {Auth} from "../LandingPage/LandingPage"


const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;



export default class LogIn extends Component {
  //State
  state = {
    email: "",
    password: "",
    redirectToReferrer: false
  };

  //Axios calls
  logIn = event => {
    const user = {
      email: this.state.email,
      password: this.state.password
    };

    axios
      .post("https://api-devdesk.herokuapp.com/api/login", user)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  //Toggles Authentication when logging in.
  
  loginAuth = event => {
    Auth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  //Combines loginAuth and Axios call into one onclick

  combinedLogin = event => {
   this.logIn();
   this.loginAuth()
  };

  //Handlers
  handleChange = e => {
    this.setState({
      ...this.state.user,
      [e.target.name]: e.target.value
    });
  };

  handleLogin = e => {
    
  };

  render() {
    //Redirects to Dashboard once authenticated.
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer === true) {
      return <Redirect to="/Dashboard" />;
    }

    return (
      <Container>
        <div>
          <form onSubmit={this.handleLogin}>
            <input
              placeholder="Email"
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <input
              placeholder="Password"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <button onClick={this.combinedLogin}>Log in</button>
          </form>
        </div>
      </Container>
    );
  }
}
