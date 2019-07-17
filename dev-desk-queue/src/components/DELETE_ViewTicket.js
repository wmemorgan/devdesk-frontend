import React, { Component } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNightEighties } from "react-syntax-highlighter/dist/esm/styles/hljs";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 1000px;

  flex-grow: 99;
  margin-top: 50px;
`;

const TicketHeader = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  max-width: 500px;

  margin: 5px 0;

  font-size: 1.6rem;
`;

const Ticket = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 500px;
  height: fit-content;

  padding: 10px;

  border: 1px solid black;

  button {
    width: fit-content;
    align-self: flex-end;
  }
`;

const Section = styled.section`
  display: flex;
  align-items: flex-start;
  margin: 10px 0;

  label {
    width: 20%;
    font-size: 1.2rem;
  }

  p,
  textarea {
    width: 80%;
    height: 100px;
    overflow-y: auto;

    border: 1px solid black;

    padding: 5px;

    font-size: 1.2rem;
  }

  textarea {
    resize: vertical;
  }

  a {
    font-size: 1.2rem;
  }
`;

class ViewTicket extends Component {
  state = {
    assigned: false, // first initialized by props
    response: ""
  };

  handleAssign = e => {
    // axios call to assign ticket to self

    this.setState({
      assigned: !this.state.assigned
    });
  };

  handleResolve = e => {
    // axios call to mark ticket resolved
    this.props.history.push("/view-assigned-tickets");
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { assigned } = this.state;
    const { ticket } = this.props;
    console.log(ticket);
    return (
      <Container>
        <TicketHeader>
          <span>{ticket.title}</span>
          <span>
            Submitted By: {ticket.openedBy.firstName} {ticket.openedBy.lastName}
          </span>
        </TicketHeader>
        <Ticket>
          <Section>
            <label>Description:</label>
            <p>{ticket.description}</p>
          </Section>
          <Section>
            <label>What I've Tried:</label>
            <p>Function Factory isn't working.</p>
          </Section>
          <Section>
            <label>Code Snippet:</label>
            <SyntaxHighlighter
              language="javascript"
              style={tomorrowNightEighties}
              customStyle={{
                width: "80%",
                resize: "vertical",
                fontSize: "1.2rem"
              }}
            >
              {ticket.comments[0]}
            </SyntaxHighlighter>
          </Section>
          <Section>
            <label>Link to Repo:</label>
            <a href="http://github.com">https://github.com/user-name</a>
          </Section>
          {assigned ? (
            <>
              <Section>
                <label>Response:</label>
                <textarea
                  name="reply"
                  placeholder="Reply to ticket here..."
                  onChange={this.handleChange}
                />
              </Section>
              <button onClick={this.handleReply}>Reply</button>
              <div>
                <button onClick={this.handleAssign}>Unassign -</button>
                <button onClick={this.handleResolve}>Resolve</button>
              </div>
            </>
          ) : (
            <>
              <Section>
                <label>Response:</label>
                <p>Response from Another User</p>
              </Section>
              <button onClick={this.handleAssign}>Assign +</button>
            </>
          )}
        </Ticket>
      </Container>
    );
  }
}

export default ViewTicket;
