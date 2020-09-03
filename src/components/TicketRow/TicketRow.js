import React from 'react';
import axios from 'axios';
import * as S from '../../styled-components/TicketRow_Styles';
import { OpenedBy } from './OpenedBy';
import { CreatedAt } from './CreatedAt';
import { AssignedTo } from './AssignedTo';
import { AssignButton } from '../Ticket/AssignButton';

const api = `https://api-devdesk.herokuapp.com/api`;

class TicketRow extends React.Component {
  state = {
    assigned: false,
    assignedTo: null
  };

  componentDidMount() {
    let assignedTo = this.props.ticket.assigned_to;

    if (assignedTo) {
      this.setState({
        assigned: true,
        assignedTo
      });
    }
  }

  handleClick = e => {
    e.preventDefault(); // prevents routing

    let ticketID = this.props.ticket.id;

    axios
      .get(`${api}/tickets/${ticketID}`)
      .then(({ data }) => {
        let ticket = data;

        if (ticket.assigned_to) {
          ticket.assigned_to = null;
        } else {
          ticket.assigned_to = this.props.activeUser.id;
        }

        return axios.put(`${api}/tickets/${ticketID}`, ticket);
      })
      .then(({ data }) => {
        console.log('ticket after assigned:', data);
        this.setState({
          assigned: !this.state.assigned,
          assignedTo: data.assigned_to
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { ticket, users, categories, activeUser } = this.props;
    const { assigned, assignedTo } = this.state;
    return (
      <S.Container to={`/tickets/${ticket.id}`}>
        <div>{ticket.id}</div>
        <div>{ticket.title}</div>
        <CreatedAt createdAt={ticket.created_at} />
        <div>{categories[ticket.category_id - 1].name}</div>
        <OpenedBy ticket={ticket} users={users} />
        <AssignedTo assignedTo={assignedTo} users={users} />
        <S.Status closed={ticket.closed}>
          {ticket.closed ? 'Resolved' : 'Open'}
        </S.Status>

        <AssignButton
          handleClick={this.handleClick}
          closed={ticket.closed}
          assigned={assigned}
          assignedTo={assignedTo}
          openedBy={ticket.opened_by}
          activeUserID={activeUser.id}
        />
      </S.Container>
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
