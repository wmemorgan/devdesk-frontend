import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import styled from "styled-components";
import TicketList from "./TicketList";
import TicketForm from "./TicketForm";
import ViewTicket from "./ViewTicket";
import RequireAuthentication from "./AuthenticationHOC";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
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

export class Dashboard extends Component {
  render() {
    return (
      <Container>
        <NavContainer>
          <LogoContainer>
            <p>DevDesk_Q</p>
          </LogoContainer>
          <NavBar>
            <Link to="tickets">View All Tickets</Link>
            <Link to="assigned-tickets">View Assigned Tickets</Link>
            <Link to="new-ticket">Create New Ticket</Link>
            <Link to="view-ticket">Logout</Link>
          </NavBar>
        </NavContainer>
        <Route path="/tickets" component={TicketList} />
        <Route path="/assigned-tickets" component={TicketList} />
        <Route path="/new-ticket" component={TicketForm} />
        <Route path="/view-ticket" component={ViewTicket} />
        <Router/>
      </Container>
    );
  }
}
export default RequireAuthentication(Dashboard);