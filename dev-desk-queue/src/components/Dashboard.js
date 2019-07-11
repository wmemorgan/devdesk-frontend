import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import styled from "styled-components";
import TicketList from "./TicketList";
import TicketForm from "./TicketForm";
import ViewTicket from "./ViewTicket";

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

export default class Dashboard extends Component {
  render() {
    return (
      <Container>
        <NavContainer>
          <LogoContainer>
            <p>DevDesk_Q</p>
          </LogoContainer>
          <NavBar>
            <Link to="">View All Tickets</Link>
            <Link to="">View Assigned Tickets</Link>
            <Link to="">Create New Ticket</Link>
            <Link to="">Logout</Link>
          </NavBar>
        </NavContainer>
        <Route path="/tickets" component={TicketList} />
        <Route path="/assigned-tickets" component={TicketList} />
        <Route path="/new-ticket" component={TicketForm} />
        <Route path="/view-ticket" component={ViewTicket} />
      </Container>
    );
  }
}
