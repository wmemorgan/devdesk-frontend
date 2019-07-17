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
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  };

  // Axios Calls
  addUser = event => {
    axios.post("https://api-devdesk.herokuapp.com/api/register", {
      first_name: "",
      last_name: "",
      email: "",
      password: ""
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
              name="firstname"
              value={this.state.first_name}
              onChange={this.handleChange}
            />
            <input
              placeholder="Last Name"
              type="text"
              name="lastname"
              value={this.state.last_name}
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
