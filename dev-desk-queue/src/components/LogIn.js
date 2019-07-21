import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { Auth } from "../LandingPage/LandingPage";
import {Container, FormHeader, Form, InputWrapper, ButtonContainer } from "../styled-components/TicketForm_Styles";
// const Container = styled.div`
//   display: flex;
//   width: 100%;
//   height: 100vh;
// `;

export default class LogIn extends Component {
  //State
  state = {
    email: "",
    password: "",
    redirectToReferrer: false,
  };

  //Axios calls
  logIn = event => {
    const user = {
      email: this.state.email,
      password: this.state.password,
      redirectToReferrer: true,
    };
    event.preventDefault();
    axios
      .post("https://api-devdesk.herokuapp.com/api/login", user)
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.data.token);
        this.props.setActiveUser(response.data.user);
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

  //Handlers
  handleChange = e => {
    this.setState({
      ...this.state.user,
      [e.target.name]: e.target.value
    });
  };

  render() {
    //Redirects to Dashboard once authenticated.
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer === true) {
      return <Redirect to="/tickets" />;
    }
    // {Container, FormHeader, Form, InputWrapper, ButtonContainer }
    return (
      <Container>
        <FormHeader>
          <h1>Login</h1>
        </FormHeader>
          <Form onSubmit={this.logIn}>
            <InputWrapper>
              <label>Email</label>
              <input
                placeholder="Email"
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </InputWrapper>
            <InputWrapper>
              <label>Password</label>
              <input
                placeholder="Password"
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </InputWrapper>
            <ButtonContainer>
              <button onClick={this.loginAuth}>Log in</button>
            </ButtonContainer>
          </Form>

      </Container>
    );
  }
}
