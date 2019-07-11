import React, { Component } from "react";
import styled from "styled-components";


const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export default class SignUp extends Component {
  render() {
    return( 
        <Container>
        <h1>Sign Up!</h1>
        </Container>
    );

  }
}
