import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import {Container, FormHeader, Form, InputWrapper, ButtonContainer } from "../../styled-components/TicketForm_Styles";


export default class Register extends Component {
  //State
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  // Axios Calls
  addUser = event => {
    const user = {
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
    };
    console.log(user)
    axios
      .post("https://api-devdesk.herokuapp.com/api/register", user)
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
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  handleLogin = e => {
    this.props.history.push("/dashboard");
  };
  // {Container, FormHeader, Form, InputWrapper, ButtonContainer } 
  render() {
    return (
      <Container>
        <FormHeader>
          <h1>Register</h1>
        </FormHeader>
          <Form onSubmit={this.handleLogin}>
            <InputWrapper>
              <label>Name</label>
              <input
                type="text"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
              />
            </InputWrapper>
            <InputWrapper>
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
              />
            </InputWrapper>
            <InputWrapper>
              <label>Email</label>
              <input
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </InputWrapper>
            <InputWrapper>
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </InputWrapper>
            <ButtonContainer>
              <button onClick={this.addUser}>Register</button>
            </ButtonContainer>
          </Form>
      </Container>
    );
  }
}
