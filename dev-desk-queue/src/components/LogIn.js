import React, { Component } from "react";
import styled from "styled-components";


const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export default class LogIn extends Component {
  render() {
    return( 
        <Container>
        <h1>Log In!</h1>
        </Container>
    );

  }
}
