import React from "react";
import { Container } from "../styled-components/TicketList_Styles";
import TicketHeader from "./TicketListHeader/TicketHeader";
import TicketRow from "./TicketRow/TicketRow";
/****************************************************************
 *                           TICKET LIST
 ****************************************************************/
class TicketList extends React.Component {
  render() {
    const { tickets, users, categories, activeUser, sortBy } = this.props;
    return (
      <Container>
        <TicketHeader sortBy={sortBy} />
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
 *                                   EXPORTS                                       *
 **********************************************************************************/
export default TicketList;
