import React, { Component } from "react";
import axios from "axios";
import { Link, NavLink, Route } from "react-router-dom";
import {
  Container,
  TopBar,
  NavContainer,
  Nav,
  MenuIconWrapper
} from "../styled-components/Dashboard_Styles";
import TicketList from "./TicketList/TicketList";
import TicketForm from "./TicketForm/TicketForm";
import Ticket from "./Ticket/Ticket";
import LogOutButton from "../LandingPage/LandingPage"

const api = `https://api-devdesk.herokuapp.com/api`;

/****************************************************************
 *                           DASHBOARD
 ****************************************************************/
class Dashboard extends Component {
  state = {
    tickets: [],
    users: [],
    categories: [],
    menuOpen: false,
    activeUser: {
      id: 1,
      first_name: "Dave",
      last_name: "Vazquez",
      email: "dmvaz.li@gmail.com"
    }
  };

  toggleMenu = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  };

  render() {
    const {
      tickets,
      categories,
      menuOpen,
      activeUser
    } = this.state;
    return (
      <Container>
        <TopBar>
          <NavContainer>
            <Link to="/tickets">
              <h1 style={{ color: "white" }}>DevDesk_Q</h1>
            </Link>
            <Nav menuOpen={menuOpen} onClick={this.toggleMenu}>
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

             
              <NavLink to="/" activeStyle={{ color: "#dddddd" }}>
                LOGOUT
              </NavLink>
              
            </Nav>
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
          exact
          path="/tickets"
          render={props => (
            <TicketList
              {...props}
              activeUser={activeUser}
            />
          )}
        />
        {/* <Route
          path="/assigned-tickets"
          render={props => (
            <TicketList
              {...props}
              // tickets={tickets}
              // users={users}
              // categories={categories}
              activeUser={activeUser}
              // sortBy={this.sortBy}
            />
          )}
        /> */}
        <Route
          path="/new-ticket"
          render={props => (
            <TicketForm
              {...props}
              categories={categories}
              activeUser={activeUser}
            />
          )}
        />
        <Route
          path="/tickets/:id"
          render={props => {
            const id = parseInt(props.match.params.id);
            return (
              <Ticket
                {...props}
                ticket={tickets.find(ticket => ticket.id === id)}
                activeUser={activeUser}
              />
            );
          }}
        />
      </Container>
    );
  }
}

export default Dashboard;
