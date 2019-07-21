import React from "react";
import axios from "axios";
import { Container } from "../../styled-components/TicketList_Styles";
import TicketHeader from "../TicketListHeader/TicketHeader";
import TicketRow from "../TicketRow/TicketRow";
import TicketListNav from "./TicketListNav";

const api = `https://api-devdesk.herokuapp.com/api`;
/****************************************************************
 *                           TICKET LIST
 ****************************************************************/
class TicketList extends React.Component {
  state = {
    tickets: [],
    filteredTickets: [],
    statusFilter: "all",
    totalTicketFilter: "all",
    users: [],
    categories: []
  };

  componentDidMount() {
    Promise.all([
      axios.get(`${api}/tickets`),
      axios.get(`${api}/users`),
      axios.get(`${api}/categories`)
    ])
      .then(([res1, res2, res3]) => {
        this.setState({
          ...this.state,
          tickets: res1.data,
          filteredTickets: res1.data,
          users: res2.data,
          categories: res3.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  sortBy = (filter, order) => {
    const {filteredTickets} = this.state;
    this.setState({
      ...this.state,
      filteredTickets: filteredTickets.sort(compareValues(filter, order))
    });
  };

  filterBy = (e, filter) => {
    e.persist();
    const {tickets} = this.state;
    const {activeUser} = this.props;
    let {filteredTickets} = this.state;
    
    this.setState({
      ...this.state,
      [e.target.name]: filter
    }, () => {

      filteredTickets = this.state.totalTicketFilter === "assigned" 
        ? tickets.filter(ticket => ticket.assigned_to === activeUser.id)
        : tickets;

      filteredTickets = this.state.statusFilter === "open" 
        ? filteredTickets.filter(ticket => !ticket.closed) 
        : this.state.statusFilter === "resolved"
        ? filteredTickets.filter(ticket => ticket.closed)
        : filteredTickets;

      this.setState({
        ...this.state,
        filteredTickets: filteredTickets
      })
    })
  }

  toggleMenu = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  };

  render() {
    const { tickets, filteredTickets, users, categories } = this.state;
    const { activeUser } = this.props;
    return (
      <Container>
        <TicketListNav 
          totalTickets={tickets.length} 
          assignedTickets={tickets.filter(ticket => ticket.assigned_to === activeUser.id).length}
          filterBy={this.filterBy}
        />
        <TicketHeader sortBy={this.sortBy} />
        {filteredTickets.map(ticket => (
          <TicketRow
            key={ticket.id}
            ticket={ticket}
            categories={categories}
            users={users}
            activeUser={activeUser}
          />
        ))}
      </Container>
    );
  }
}
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

/*********************************************************************************
 *                                   EXPORTS                                       *
 **********************************************************************************/
export default TicketList;
