import React, { Component } from "react";
import axios from "axios";
import CommentSection from "./CommentSection";
import {
  Container,
  TicketInfo,
  TicketHeader,
  Description,
  ReplyWrapper,
  CommentSectionHeader
} from "../../styled-components/Ticket_Styles";
import { UserInfo } from "./UserInfo";
import { CodeSnippet } from "./CodeSnippet";
import { Repo } from "./Repo";
import { ButtonContainer } from "./ButtonContainer";

const api = `https://api-devdesk.herokuapp.com/api`;

/*
  TO-DO:
    try to clean up axios --- never going to happen
    try to clean up imports
*/

class Ticket extends Component {
  state = {
    ticket: null,
    comments: null,
    category: null,
    assignedTo: null,
    openedBy: null,
    assigned: false,
    reply: "",
    fetchingTicket: true
  };

  componentDidMount() {
    let ticket, category, openedBy, assignedTo, assigned;
    let ticketID = this.props.match.params.id;
    let comments = [];
    let promises = [];

    axios
      .get(`${api}/tickets/${ticketID}`)
      .then(({ data }) => {
        ticket = data;
        return axios.get(`${api}/categories/${ticket.category_id}`);
      })
      .then(({ data }) => {
        category = data;
        return axios.get(`${api}/users/${ticket.opened_by}`);
      })
      .then(({ data }) => {
        openedBy = data;
        return ticket.assigned_to
          ? axios.get(`${api}/users/${ticket.assigned_to}`)
          : false;
      })
      .then(res => {
        console.log("response from this shit", res);
        if (res) {
          assignedTo = res.data;
          assigned = !ticket.closed;
        }

        return axios.get(`${api}/tickets/${ticketID}/comments`);
      })
      .then(({ data }) => {
        data.forEach((entry, i) => {
          comments[i] = entry;
          promises.push(axios.get(`${api}/users/${entry.opened_by}`));
        });

        return axios.all(promises);
      })
      .then(res => {
        res.forEach((entry, i) => {
          comments[i].opened_by = entry.data;
        });
      })
      .then(() => {
        this.setState({
          ...this.state,
          ticket,
          comments,
          category,
          assignedTo,
          assigned,
          openedBy,
          fetchingTicket: false
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  toggleAssigned = () => {
    const { ticket, assigned } = this.state;
    const { activeUser } = this.props;

    axios
      .get(`${api}/tickets/${ticket.id}`)
      .then(({ data }) => {
        let ticket = data;

        if (ticket.assigned_to) {
          ticket.assigned_to = null;
        } else {
          ticket.assigned_to = activeUser.id;
        }

        return axios.put(`${api}/tickets/${ticket.id}`, ticket);
      })
      .then(({ data }) => {
        this.setState({
          ...this.state,
          ticket: data,
          assigned: !assigned,
          assignedTo: data.assigned_to
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  addComment = () => {
    const { reply, ticket, comments } = this.state;

    const newComment = {
      comment: reply,
      ticket_id: ticket.id,
      opened_by: 4
    };

    axios
      .post(`${api}/tickets/${ticket.id}/comments`, newComment)
      .then(() => {
        return axios.get(`${api}/tickets/${ticket.id}/comments`);
      })
      .then(({ data }) => {
        newComment.comment = data[data.length - 1].comment;
        return axios.get(`${api}/users/${data[data.length - 1].opened_by}`);
      })
      .then(res => {
        newComment.opened_by = res.data;
      })
      .then(() => {
        this.setState({
          ...this.state,
          comments: [...comments, newComment],
          reply: ""
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteComment = id => {
    const { ticket } = this.state;
    axios.delete(`${api}/tickets/${ticket.id}/comments/${id}`).catch(err => {
      console.log(err);
    });
  };

  markResolved = () => {
    const { ticket } = this.state;
    let confirmed = window.confirm(
      "Are you sure you want to resolve this ticket?\nChanges cannot be made afterwards."
    );
    if (confirmed) {
      axios
        .get(`${api}/tickets/${ticket.id}`)
        .then(({ data }) => {
          let ticket = data;

          ticket.closed = true;

          return axios.put(`${api}/tickets/${ticket.id}`, ticket);
        })
        .then(({ data }) => {
          console.log("ticket after closed:", data);
          this.setState({
            ...this.state,
            assigned: false,
            assignedTo: null
          });
        })
        .then(() => {
          this.props.history.push("/tickets");
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  render() {
    const {
      assigned,
      assignedTo,
      category,
      comments,
      openedBy,
      reply,
      ticket,
      fetchingTicket
    } = this.state;
    const { activeUser } = this.props;

    return fetchingTicket ? (
      <div>Fetching Ticket...</div>
    ) : (
      <Container>
        <TicketInfo>
          <TicketHeader>
            <h1>{ticket.title}</h1>
            <span>Category - {category.name}</span>
          </TicketHeader>
          <UserInfo
            openedBy={openedBy}
            createdAt={ticket.created_at}
            bordered
            top
          />
          <Description>
            <p>{`${ticket.description}`}</p>
          </Description>
          <CodeSnippet codeSnippet={comments[0].comment} />
          <Repo comment={comments[1].comment} />
        </TicketInfo>
        <CommentSection
          comments={comments.slice(2)}
          deleteComment={this.deleteComment}
        />
        {assigned && activeUser.id === ticket.assigned_to && (
          <ReplyWrapper>
            <textarea
              name="reply"
              placeholder="Type your reply here.."
              value={reply}
              onChange={this.handleChange}
            />
          </ReplyWrapper>
        )}

        <ButtonContainer
          toggleAssigned={this.toggleAssigned}
          markResolved={this.markResolved}
          addComment={this.addComment}
          assignedTo={ticket.assigned_to}
          assigned={assigned}
          ticket={ticket}
          activeUser={activeUser}
        />
      </Container>
    );
  }
}

export default Ticket;