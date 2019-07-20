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
import TicketList from "./TicketList";
<<<<<<< HEAD
import TicketForm from "./TicketForm/TicketForm";
import ViewTicket from "./Ticket/Ticket";
=======
import TicketForm from "./TicketForm";
import ViewTicket from "./ViewTicket";
// import RequireAuthentication from "./Authentication";
>>>>>>> 60c1b29d2d2ff34aa4ae3b86527cdf416caf98d3

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
      id: 12,
      first_name: "Dave",
      last_name: "Vazquez",
      email: "dmvaz.li@gmail.com"
    }
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

  sortBy = (filter, order) => {
    this.setState({
      ...this.state,
      tickets: this.state.tickets.sort(compareValues(filter, order))
    });
  };

  toggleMenu = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  };

<<<<<<< HEAD
=======
export class Dashboard extends Component {
>>>>>>> 60c1b29d2d2ff34aa4ae3b86527cdf416caf98d3
  render() {
    const {
      tickets,
      users,
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
              activeUser={activeUser}
              sortBy={this.sortBy}
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
              activeUser={activeUser}
              sortBy={this.sortBy}
            />
          )}
        />
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
              <ViewTicket
                {...props}
                ticket={tickets.find(ticket => ticket.id === id)}
                users={users}
                categories={categories}
                activeUser={activeUser}
              />
            );
          }}
        />
      </Container>
    );
  }
}
<<<<<<< HEAD
/*********************************************************************************
 *                                UTILITY FUNCTION                                *
 **********************************************************************************/
function compareValues(key, order) {
  return function(tick1, tick2) {
    if (!tick1.hasOwnProperty(key) || !tick2.hasOwnProperty(key)) {
      return 0;
    }

    const val1 =
      typeof tick1[key] === "string" ? tick1[key].toLowerCase() : tick1[key];
    const val2 =
      typeof tick2[key] === "string" ? tick2[key].toLowerCase() : tick2[key];

    let comparison = 0;
    if (val1 > val2) {
      comparison = 1;
    } else if (val1 < val2) {
      comparison = -1;
    }

    return order === "asc" ? comparison * -1 : comparison;
  };
}

export default Dashboard;
=======

export default Dashboard;
>>>>>>> 60c1b29d2d2ff34aa4ae3b86527cdf416caf98d3
