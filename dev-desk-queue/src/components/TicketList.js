import React, { Component } from "react";
import { Container } from "../styled-components/TicketListStyles";
import Ticket from "./Ticket";
import TicketHeader from "./TicketHeader";
import { tickets } from "../data";

class TicketList extends Component {
  sortBy = (filter, order) => {
    this.setState({
      tickets: tickets.sort(compareValues(filter, order))
    });
  };

  render() {
    const { tickets, users, categories } = this.props;
    return (
      <Container>
        <TicketHeader sortBy={this.sortBy} />
        {tickets.map(ticket => (
          <Ticket
            key={ticket.id}
            ticket={ticket}
            users={users}
            categories={categories}
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
