import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import Auth from "../LandingPage/LandingPage";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export default class LogIn extends Component {
  //State
  state = {
    email: "",
    password: ""
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

  //Handlers
  handleChange = e => {
    this.setState({
      ...this.state.user,
      [e.target.name]: e.target.value
    });
  };

  handleLogin = e => {
    Auth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {
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
            <button onClick={this.logIn}>Log in</button>
          </form>
        </div>
      </Container>
    );
  }
}
