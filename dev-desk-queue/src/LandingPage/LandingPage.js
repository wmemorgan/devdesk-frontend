import React, { Component } from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import LogIn from "../components/LogIn";
import Register from "../components/Register";
import Dashboard from "../components/Dashboard";
import PrivateRoute from "./PrivateRoute";
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  border: 1px solid black;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: fit-content;
  padding: 10px 20px;
  border: 1px solid black;
`;

const LogoContainer = styled.div`
  width: 100px;
  height: 50px;
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
`;


//Authentication 
export const Auth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};




export default class LandingPage extends Component {
  render() {
    return (
      <Container>
        <NavContainer>
          <LogoContainer>
            <p>DevDesk_Q</p>
          </LogoContainer>
          <NavBar>
            <Link to="login">Log In</Link>
            <Link to="register">Register</Link>
            <Link to="dashboard">Dashboard</Link>
          </NavBar>
        </NavContainer>
        <Route path="/" />
        <Route path="/login" component={LogIn} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </Container>
    );
  }
}
