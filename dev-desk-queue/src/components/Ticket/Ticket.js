import React, { Component } from "react";
import styled from "styled-components";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNightEighties } from "react-syntax-highlighter/dist/esm/styles/hljs";
import CommentSection from "./CommentSection";
import {
  Container,
  TicketInfo,
  TicketHeader,
  UserInfo,
  Description,
  CodeSnippet,
  Repo,
  ButtonContainer,
  ReplyWrapper,
  CommentSectionHeader
} from "../../styled-components/Ticket_Styles";
import { InputWrapper } from "../../styled-components/TicketForm_Styles";
import { CreatedAt } from "../Ticket/CreatedAt";
import { OpenedBy } from "../Ticket/OpenedBy";
import axios from "axios";

const api = `https://api-devdesk.herokuapp.com/api`;

class Ticket extends Component {
  state = {
    assigned: this.props.ticket.assigned_to ? true : false,
    comments: [],
    reply: ""
  };

  componentDidMount() {
    axios
      .get(`${api}/tickets/${this.props.ticket.id}/comments`)
      .then(({ data }) => {
        this.setState({
          ...this.state,
          comments: data
        });
      })
      .then(res => {
        console.log(this.state);
      })
      .catch(err => {
        console.log(err);
      });
  }

  assignTicket = () => {
    this.setState({
      assigned: !this.state.assigned
    });
  };

  addComment = () => {
    
    const newComment = {
      comment: this.state.reply,
      ticket_id: this.props.ticket.id,
      opened_by: 12
    }

    axios
      .post(`${api}/tickets/${this.props.ticket.id}/comments`, newComment)
      .then(({data}) => {
        console.log('post comment',data);
        return axios.get(`${api}/tickets/${this.props.ticket.id}/comments`);
      })
      .then(({data}) => {
        console.log('get comment',data);
        this.setState({
          ...this.state,
          comments: data,
          reply: ""
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { ticket, users, categories } = this.props;
    const { comments } = this.state;
    return (
      <Container>
        <TicketInfo>
          <TicketHeader>
            <h1>{ticket.title}</h1>
            <span>Category - {categories[ticket.category_id - 1].name}</span>
          </TicketHeader>
          <UserInfo bordered>
            <OpenedBy className="opened-by" ticket={ticket} users={users} />
            <CreatedAt className="date" createdAt={ticket.created_at} />
          </UserInfo>
          <Description>
            <p>{`${ticket.description}`}</p>
          </Description>
          <CodeSnippet>
            <SyntaxHighlighter
              language="javascript"
              style={tomorrowNightEighties}
              customStyle={{
                fontFamily: "Courier",
                width: "100%",
                fontSize: "1.2rem"
              }}
            >
              {"//code"}
            </SyntaxHighlighter>
          </CodeSnippet>
          <Repo>
            <label>Link to Repo:</label>
            <a href="http://github.com">https://github.com/user-name</a>
          </Repo>
        </TicketInfo>
        {comments.length > 0 && (
          <CommentSection comments={comments} users={users} />
        )}
        {this.state.assigned && (
          <ReplyWrapper>
            <textarea
              name="reply"
              placeholder="Type your reply here.."
              value={this.state.reply}
              onChange={this.handleChange}
            />
          </ReplyWrapper>
        )}
        <ButtonContainer>
          <button onClick={this.assignTicket}>
            {this.state.assigned ? "UNASSIGN" : "ASSIGN"}
          </button>
          {this.state.assigned && (
            <>
              <button >MARK RESOLVED</button>
              <button onClick={this.addComment}>REPLY</button>
            </>
          )}
        </ButtonContainer>
      </Container>
    );
  }
}

export default Ticket;

/*

  CDM ->
    if there are comments, render all the comments **** CHECK
    if the ticket is assigned to someone set state.assigned = to true

  CLICK ON ASSIGN:
    if the 
  1) assign the 

*/
