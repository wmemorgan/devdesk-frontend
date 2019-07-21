import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import {Container} from "./styled-components/Dashboard_Styles";
import LandingPage from "./components/LandingPage/LandingPage";
import LogIn from "./components/LandingPage/LogIn";
import Register from "./components/LandingPage/Register";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import TicketForm from "./components/TicketForm/TicketForm";
import TicketList from "./components/TicketList/TicketList";
import { Auth } from "./authentication/Authentication";
import {
  TopBar,
  NavContainer,
  Nav,
  MenuIconWrapper
} from "./styled-components/Dashboard_Styles";
import Ticket from "./components/Ticket/Ticket";

class App extends React.Component {
  state = {
    activeUser: {},
    authenticated: false,
    menuOpen: false
  };

  setActiveUser = activeUser => {
    this.setState({
      activeUser
    });
  };

  toggleMenuIcon = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  };

  render() {
    const { activeUser, menuOpen } = this.state;

    return (
      <Container>
        {/* Common Top Bar w/ Nav --- Links rendered based on authentication toggle */}
        <TopBar>
          <NavContainer>
            <Link to="/">
              <h1 style={{ color: "white" }}>DevDesk_Q</h1>
            </Link>
            {/* STRETCH: convert this to HOC ? */}
            {!Auth.isAuthenticated ? (
              <Nav>
                <Link to="login">LOGIN</Link>
                <Link to="register">REGISTER</Link>
              </Nav>
            ) : (
              <Nav menuOpen={menuOpen} onClick={this.toggleMenuIcon}>
                <NavLink to="/tickets" activeStyle={{ color: "#dddddd" }}>
                  TICKETS
                </NavLink>
                {/* <NavLink
                    to="/assigned-tickets"
                    activeStyle={{ color: "#dddddd" }}
                  >
                    YOUR TICKETS
                  </NavLink> */}
                <NavLink to="/new-ticket" activeStyle={{ color: "#dddddd" }}>
                  OPEN NEW TICKET
                </NavLink>
                <NavLink 
                  to="/" 
                  activeStyle={{ color: "#dddddd" }}
                  onClick={()=> Auth.signout()} 
                  // () => this.props.history.push("/"))
                >
                  LOGOUT
                </NavLink>
              </Nav>
            )}
            <MenuIconWrapper>
              <img
                src="https://img.icons8.com/ios-glyphs/30/FFFFFF/menu.png"
                onClick={this.toggleMenu}
                alt="Menu Icon"
              />
            </MenuIconWrapper>
          </NavContainer>
        </TopBar>
        <Route 
          exact path="/"
          component={LandingPage} />
        <Route
          path="/login"
          render={props => (
            <LogIn {...props} setActiveUser={this.setActiveUser} />
          )}
        />
        <Route 
          path="/register" 
          render={props => (
            <Register {...props} setActiveUser={this.setActiveUser} />
          )} 
        />
        <PrivateRoute
          exact path="/tickets"
          component={TicketList}
          activeUser={activeUser}
        />
        <PrivateRoute
          path="/tickets/:id"
          component={Ticket}
          activeUser={activeUser}
        />
        <PrivateRoute
          path="/new-ticket"
          component={TicketForm}
          activeUser={activeUser}
        />
        {/* 
            MVP: Conditional render of LandingPage/Dashboard based on authentication toggle
            
            STRETCH: Implement HOC that returns either LandingPage or Dashboard based on
                     authentication toggle
        */}
        {/* <LandingPage /> */}
        {/* <Dashboard /> */}
      </Container>
    );
  }
}
export default App;
