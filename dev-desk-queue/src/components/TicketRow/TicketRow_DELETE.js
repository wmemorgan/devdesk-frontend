import React from "react";
import { Container, Status } from "../../styled-components/TicketRow_Styles";
import { OpenedBy } from "./OpenedBy";
import { CreatedAt } from "./CreatedAt";
import { AssignedTo } from "./AssignedTo";
import axios from "axios";

const api = `https://api-devdesk.herokuapp.com/api`;

class TicketRow extends React.Component {
  state = {
    assigned: false,
    assigned_to: null
  };

  handleClick = e => {
    e.preventDefault(); // prevents routing

    let ticketID = this.props.ticket.id

    axios.get(`${api}/tickets/${ticketID}`)
    .then(({data}) => {
      console.log('tickets put', data);
      let ticket = data;

      ticket.assigned_to = this.props.activeUser.id;

      return axios.put(`${api}/tickets/${ticketID}`, ticket)
    })
    .then(({data}) => {
      console.log('tickets get',data)
      this.setState({
        assigned: !this.state.assigned,
        assigned_to: data.id
      });
    })
    .catch(err => {
      console.log(err);
    })
  };

  render() {
    const { ticket, users, categories } = this.props;
    // console.log("TICKET", ticket.id);
    return (
      <Container to={`/tickets/${ticket.id}`}>
        <div>{ticket.id}</div>
        <div>{ticket.title}</div>
        <CreatedAt createdAt={ticket.created_at} />
        <div>{categories[ticket.category_id - 1].name}</div>
        <OpenedBy ticket={ticket} users={users} />
        <AssignedTo users={users} ticket={ticket}/>
        <Status closed={ticket.closed}>
          {ticket.closed ? "Resolved" : "Open"}
        </Status>
        {!this.state.assigned_to && !ticket.closed && (
          <button onClick={this.handleClick}>
            {this.state.assigned ? "REMOVE" : "ASSIGN"}
          </button>
        )}
      </Container>
    );
  }
}

export default TicketRow;
