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

// const Container = styled.div`
//   display: flex;
//   width: 100%;
//   height: 100vh;
//   flex-direction: column;
//   border: 1px solid black;
// `;

// const NavContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 100%;
//   height: fit-content;
//   padding: 10px 20px;
//   border: 1px solid black;
// `;

// const LogoContainer = styled.div`
//   width: 100px;
//   height: 50px;
// `;

// const NavBar = styled.nav`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 500px;
// `;

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
    console.log(localStorage);
    setTimeout(cb, 100);
  }
};

//Creates a private route
function PrivateRoute({ component: Component, ...rest }) {
  
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
      </Container>
    );
  }
}
