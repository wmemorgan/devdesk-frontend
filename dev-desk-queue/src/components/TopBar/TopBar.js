import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { Auth } from "../../authentication/Authentication";
import {
  StyledTopBar,
  NavContainer,
  Nav,
  MenuIconWrapper
} from "../../styled-components/Dashboard_Styles";
export default class TopBar extends Component {
  state = {
    menuOpen: false
  };

  toggleMenuIcon = () => {
		console.log('click');
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  };

  render() {
    const { menuOpen } = this.state;
    return (
      <>
        {Auth.isAuthenticated && (
          <StyledTopBar>
            <NavContainer>
              <Link to="/tickets">
                <h1 style={{ color: "white" }}>DevDesk_Q</h1>
              </Link>

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
                  onClick={() => Auth.signout()}
                >
                  LOGOUT
                </NavLink>
              </Nav>

              <MenuIconWrapper>
                <img
                  src="https://img.icons8.com/ios-glyphs/30/FFFFFF/menu.png"
                  onClick={this.toggleMenuIcon}
                  alt="Menu Icon"
                />
              </MenuIconWrapper>
            </NavContainer>
          </StyledTopBar>
        )}
      </>
    );
  }
}
