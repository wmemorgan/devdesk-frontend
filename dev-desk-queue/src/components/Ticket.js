import React from "react";
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
    const { assigned } = this.state;
    const {
      id,
      title,
      created_at,
      category_id,
      opened_by,
      assigned_to,
      closed
    } = this.props.ticket;
    const { users, categories } = this.props;
    console.log("TICKET RENDERING", category_id, categories[category_id]);
    return (
      <Container to={`/tickets/${id}`}>
        <div>{id}</div>
        <div>{title}</div>
        <div>{created_at}</div>
        <div>{categories[category_id - 1].name}</div>
        <div>{`${users[opened_by].last_name}, ${
          users[opened_by].first_name
        }`}</div>
        <div>
          {assigned_to
            ? `${users[assigned_to].last_name}, ${
                users[assigned_to].first_name
              }`
            : ""}
        </div>
        <Status closed={closed}>{closed ? "Resolved" : "Open"}</Status>
        {!assigned_to && !closed && (
          <button onClick={this.handleClick}>
            {assigned ? "REMOVE" : "ASSIGN"}
          </button>
        )}
      </Container>
    );
  }
}

export default Ticket;
