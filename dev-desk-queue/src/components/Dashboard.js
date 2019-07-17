import React, { Component } from "react";
import { Link, NavLink, Route } from "react-router-dom";
import {
  Container,
  TopBar,
  NavContainer,
  Nav,
  MenuIconWrapper
} from "../styled-components/DashboardStyles";
import TicketList from "./TicketList";
import TicketForm from "./TicketForm";
import ViewTicket from "./ViewTicket/ViewTicket";
import axios from "axios";

const api = `https://api-devdesk.herokuapp.com/api`;

class Dashboard extends Component {
  state = {
    tickets: [],
    users: [],
    categories: [],
    menuOpen: false
  };

  componentDidMount() {
    Promise.all([
      axios.get(`${api}/tickets`),
      axios.get(`${api}/users`),
      axios.get(`${api}/categories`)
    ])
      .then(([res1, res2, res3]) => {
        this.setState({
          tickets: res1.data,
          users: res2.data,
          categories: res3.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  toggleMenu = (e, open) => {
    this.setState({
      menuOpen: open || !this.state.menuOpen
    });
  };

  render() {
    const { tickets, users, categories, menuOpen } = this.state;
    return (
      <Container>
        <TopBar>
          <NavContainer>
            <Link to="/tickets">
              <h1 style={{ color: "white" }}>DevDesk_Q</h1>
            </Link>
            <Nav menuOpen={menuOpen} onClick={e => this.toggleMenu(e, false)}>
              <NavLink to="/tickets" activeStyle={{ color: "#dddddd" }}>
                TICKETS
              </NavLink>
              <NavLink
                to="/assigned-tickets"
                activeStyle={{ color: "#dddddd" }}
              >
                YOUR TICKETS
              </NavLink>
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
              tickets={tickets}
              users={users}
              categories={categories}
            />
          )}
        />
        <Route
          path="/assigned-tickets"
          render={props => (
            <TicketList
              {...props}
              tickets={tickets}
              users={users}
              categories={categories}
            />
          )}
        />
        <Route
          path="/new-ticket"
          component={TicketForm}
          categories={categories}
        />
        <Route
          path="/tickets/:id"
          render={props => {
            const id = parseInt(props.match.params.id);
            return (
              <ViewTicket
                {...props}
                ticket={tickets[id]}
                users={users}
                categories={categories}
              />
            );
          }}
        />
      </Container>
    );
  }
}

export default Dashboard;
