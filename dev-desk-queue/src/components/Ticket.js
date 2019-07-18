import React from "react";
import moment from "moment";
import { Container, Status } from "../styled-components/TicketStyles";
import { loggedInUser } from "../data";

let num = 0;

class Ticket extends React.Component {
  state = {
    assigned: false
  };

  componentWillMount() {}

  handleClick = e => {
    e.preventDefault(); // prevents routing

    // axios call to assign ticket to self

    this.setState({
      assigned: !this.state.assigned
    });
  };

  render() {
    const { ticket } = this.props;
    const { users, categories } = this.props;
    console.log("TICKET", ticket, ticket.opened_by);
    const created_at = moment(ticket.created_at.split("T")[0]).format(
      "M/DD/YYYY"
    );
    return (
      <Container to={`/tickets/${ticket.id}`}>
        <div>{ticket.id}</div>
        <div>{ticket.title}</div>
        <div>{created_at}</div>
        <div>{categories[ticket.category_id - 1].name}</div>
        <div>{`${users.find(user => user.id === ticket.opened_by).last_name}, 
          ${users.find(user => user.id === ticket.opened_by).first_name}
        `}</div>
        <div>
          {ticket.assigned_to
            ? `${users[ticket.assigned_to].last_name}, ${
                users[ticket.assigned_to].first_name
              }`
            : ""}
        </div>
        <Status closed={ticket.closed}>
          {ticket.closed ? "Resolved" : "Open"}
        </Status>
        {!ticket.assigned_to && !ticket.closed && (
          <button onClick={this.handleClick}>
            {this.state.assigned ? "REMOVE" : "ASSIGN"}
          </button>
        )}
      </Container>
    );
  }
}

export default Ticket;
