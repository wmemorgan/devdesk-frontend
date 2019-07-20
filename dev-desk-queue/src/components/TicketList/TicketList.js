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

  render() {
    const { tickets, users, categories } = this.state;
    const { activeUser } = this.props;
    return (
      <Container>

        <TicketListNav />

        <TicketHeader sortBy={this.sortBy} />
        {tickets.map(ticket => (
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
