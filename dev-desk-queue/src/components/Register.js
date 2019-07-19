import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

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

  render() {
    return (
      <Container>
        <div>
          <form onSubmit={this.handleLogin}>
            <input
              placeholder="First Name"
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
            <input
              placeholder="Last Name"
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
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
            <button onClick={this.addUser}>Register</button>
          </form>
        </div>
      </Container>
    );
  }
}
