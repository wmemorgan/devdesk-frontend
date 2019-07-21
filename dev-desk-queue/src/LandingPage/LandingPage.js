import React, { Component } from "react";
import {Container, TopBar, NavContainer, Nav, MenuIconWrapper} from "../styled-components/Dashboard_Styles";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import LogIn from "../components/LogIn";
import Register from "../components/Register";
import Dashboard from "../components/Dashboard";
import TicketForm from "../components/TicketForm/TicketForm";

//Authentication
export const Auth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    this.isAuthenticated = false;
    localStorage.removeItem("token");
  }
};

//Creates a private route
export function PrivateRoute({ component: Component, ...rest }) {
  
  return (
    <Route
      {...rest}
      render={props =>
        Auth.isAuthenticated ? (
          <Component {...props} {...rest} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

//Logout component
export const LogOutButton = withRouter(({ history }) =>
  Auth.isAuthenticated ? (
    <p>
      Welcome!{" "}
      <button
        onClick={() => {
          Auth.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  )
);

export default class LandingPage extends Component {
  state = {
    user: {}
  };

  setActiveUser = user => {
    this.setState({
      user
    });
    console.log(user);
  };

  render() {
    return (
      <Container>
        { !Auth.isAuthenticated ? 
          <TopBar>
            <NavContainer>
              <Link to="/">
                <h1 style={{ color: "white" }}>DevDesk_Q</h1>
              </Link>
              <Nav>
                <Link to="login">Log In</Link>
                <Link to="register">Register</Link>
              </Nav>
            </NavContainer>
          </TopBar>
           : null }
        
        <Route path="/" />
        <Route
          path="/login"
          render={props => (
            <LogIn {...props} setActiveUser={this.setActiveUser} />
          )}
        />
        <Route path="/register" component={Register} />
        <PrivateRoute
          path="/tickets"
          component={Dashboard}
          user={this.state.user}
        />
        <PrivateRoute
          path="/new-ticket"
          component={TicketForm}
          // user={this.state.user}
        />
      </Container>
    );
  }
}
