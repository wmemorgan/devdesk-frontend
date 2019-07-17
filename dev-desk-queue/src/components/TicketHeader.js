import React from "react";
import styled from "styled-components";
import {
  Container,
  SortIcons
} from "../styled-components/TicketListHeaderStyles";

class TicketHeader extends React.Component {
  state = {
    headers: [
      {
        id: "id",
        text: "ID",
        filter: "id",
        order: "desc",
        active: false
      },
      {
        text: "Title",
        filter: "title",
        order: "desc",
        active: false
      },
      {
        text: "Date",
        filter: "createdAt",
        order: "desc",
        active: false
      },
      {
        text: "Category",
        filter: "category",
        order: "desc",
        active: false
      },
      {
        text: "Opened By",
        filter: "openedBy",
        order: "desc",
        active: false
      },
      {
        text: "Assigned To",
        filter: "assignedTo",
        order: "desc",
        active: false
      },
      {
        text: "Status",
        filter: "closed",
        order: "desc",
        active: false
      }
    ]
  };

  // on click -->
  sortBy = (filter, i) => {
    const { headers } = this.state;

    this.setState({
      headers: headers.map(header => ({
        ...header,
        active: header.filter === filter,
        order: header.order === "asc" ? "desc" : "asc"
      }))
    });

    this.props.sortBy(filter, this.state.headers[i].order);
  };

  render() {
    const { headers } = this.state;
    return (
      <Container>
        {headers.map((header, i) => (
          <div key={i}>
            <span>{header.text}</span>
            <SortIcons onClick={() => this.sortBy(header.filter, i)}>
              <img
                src="https://img.icons8.com/ios-glyphs/10/FFFFFF/sort-up.png"
                alt="Sort Up"
                style={{
                  visibility:
                    !header.active || header.order === "asc"
                      ? "visible"
                      : "hidden"
                }}
              />
              <img
                src="https://img.icons8.com/ios-glyphs/10/FFFFFF/sort-down.png"
                alt="Sort Down"
                style={{
                  visibility:
                    !header.active || header.order === "desc"
                      ? "visible"
                      : "hidden"
                }}
              />
            </SortIcons>
          </div>
        ))}
      </Container>
    );
  }
}

export default TicketHeader;
