import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export default class LogIn extends Component {
  //State

  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  

//Axios calls



//Handlers 
  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  handleLogin = e => {
    this.props.history.push("/dashboard")
  };

  //Log Out
//   const logout = () => {
//     localStorage.removeItem("access_token");
//     localStorage.removeItem("expire_at");
// }

  render() {
    return (
      <Container>
        <div>
          <form onSubmit={this.handleLogin}>
            <input
              type="text"
              name="username"
              value={this.state.credentials.username}
              onChange={this.handleChange}
            />
            <input
              type="password"
              name="password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
            />
            <button>Log in</button>
          </form>
        </div>
      </Container>
    );
  }
}
