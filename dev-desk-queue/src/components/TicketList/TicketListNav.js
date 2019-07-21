import React from "react";
import {
  Container,
  TicketCount,
  StatusFilters
} from "../../styled-components/TicketListNav_Styles";

class TicketListNav extends React.Component {
  state = {
    totalTicketFilter: "all",
    statusFilter: "all"
  };

  handleClick = e => {
    this.setState({
      [e.target.name]: e.target.value
    });

    this.props.filterBy(e, e.target.value);
  };

  render() {
    const { totalTickets, assignedTickets } = this.props;
    const { totalTicketFilter, statusFilter } = this.state;
    return (
      <Container>
        <TicketCount status={totalTicketFilter}>
          <div>
            <span>Total Tickets</span>
            <span>Your Tickets</span>
          </div>
          <div>
            <button
              className="total-all"
              name="totalTicketFilter"
              value="all"
              onClick={this.handleClick}
            >
              {totalTickets}
            </button>
            <button
              className="total-assigned"
              name="totalTicketFilter"
              value="assigned"
              onClick={this.handleClick}
            >
              {assignedTickets}
            </button>
          </div>
        </TicketCount>
        <StatusFilters status={statusFilter} >
          <div>
            <span>Filters</span>
          </div>
          <div>
            <button
              className="status-all"
              name="statusFilter"
              value="all"
              onClick={this.handleClick}
            >
              All
            </button>
            <button
              className="status-open"
              name="statusFilter"
              value="open"
              onClick={this.handleClick}
            >
              Open
            </button>
            <button
              className="status-resolved"
              name="statusFilter"
              value="resolved"
              onClick={this.handleClick}
            >
              Resolved
            </button>
          </div>
        </StatusFilters>
      </Container>
    );
  }
}

export default TicketListNav;
