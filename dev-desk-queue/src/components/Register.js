import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export default class Register extends Component {
  //State
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

//Axios Calls
//   addUser = event => {
//     axios
//       .post("https://devdeskqueue-01.herokuapp.com/api/register", this.state.user)
//       .then(res => console.log(res))
//       .catch(err => console.log(err));
//   }

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
            <button onClick={this.addFriend}>Register</button>
          </form>
        </div>
      </Container>
    );
  }
}
