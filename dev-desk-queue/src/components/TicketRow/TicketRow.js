import React from "react";
import axios from "axios";
import {
  Container,
  Status,
} from "../../styled-components/TicketRow_Styles";
import { OpenedBy } from "../Ticket/OpenedBy";
import { CreatedAt } from "../Ticket/CreatedAt";
import { AssignedTo } from "./AssignedTo";
import { AssignButton } from "../Ticket/AssignButton";

const api = `https://api-devdesk.herokuapp.com/api`;

class TicketRow extends React.Component {
  state = {
    assigned: false,
    assigned_to: null
  };

  componentDidMount() {
    let assignedTo = this.props.ticket.assigned_to;

    if (assignedTo) {
      this.setState({
        assigned_to: assignedTo,
        assigned: false
      });
    }
  }

  handleClick = e => {
    e.preventDefault(); // prevents routing

    let ticketID = this.props.ticket.id;

    axios
      .get(`${api}/tickets/${ticketID}`)
      .then(({ data }) => {
        console.log("tickets put", data);
        let ticket = data;

        ticket.assigned_to = this.props.activeUser.id;

        return axios.put(`${api}/tickets/${ticketID}`, ticket);
      })
      .then(({ data }) => {
        console.log("tickets get", data);
        this.setState({
          assigned: !this.state.assigned,
          assigned_to: data.id
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { ticket, users, categories, activeUser } = this.props;
    const { assigned, assigned_to } = this.state;
    // console.log("TICKET", ticket.id);
    return (
      <Container to={`/tickets/${ticket.id}`}>
        <div>{ticket.id}</div>
        <div>{ticket.title}</div>
        <CreatedAt createdAt={ticket.created_at} />
        <div>{categories[ticket.category_id - 1].name}</div>
        <OpenedBy ticket={ticket} users={users} />
        <AssignedTo assignedTo={assigned_to} users={users} />
        <Status closed={ticket.closed}>
          {ticket.closed ? "Resolved" : "Open"}
        </Status>

        <AssignButton
          handleClick={this.handleClick}
          ticketID={ticket.id}
          assigned={assigned}
          assignedTo={assigned_to}
          openedBy={ticket.opened_by}
          activeUserID={activeUser.id}
        />
      </Container>
    );
  }
}

/*
  AssignedButton
    Assign (Green) - enabled
      shown if:
        Ticket is not assigned to another user
        Ticket is not created by activeUser
    Assigned (Red) - disabled
      shown if:
        Ticket is assigned to another user
    Unassign (Yellow) - enabled
      shown if:
        Ticket is assigned to activeUser
    Nothing
      shown if:
        Ticket was opened by activeUser


    AssignedTo
      Name
        shown if:
          ticket is assigned to any user
          ticket is assigned by the active user


  AssignedTo

*/

export default TicketRow;
