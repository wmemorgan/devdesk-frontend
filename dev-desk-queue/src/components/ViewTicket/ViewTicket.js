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
  ButtonContainer
} from "../../styled-components/ViewTicketStyles";

class ViewTicket extends Component {
  state = {
    assigned: false
  };

  assignTicket = () => {
    this.setState({
      assigned: !this.state.assigned
    });
  };

  render() {
    const { users, categories } = this.props;
    const {
      id,
      title,
      created_at,
      category_id,
      opened_by,
      assigned_to,
      closed,
      description
    } = this.props.ticket;
    return (
      <Container>
        <TicketInfo>
          <TicketHeader>
            <h1>{title}</h1>
            <span>{`${created_at} · ${categories[category_id - 1]}`}</span>
          </TicketHeader>
          <UserInfo>
            <p>
              <span className="user-name">{`${
                users.find(user => user.id === opened_by).first_name
              }, ${users.find(user => user.id === opened_by).last_name}`}</span>
              <span className="date">{` @ ${created_at}`}</span>
            </p>
          </UserInfo>
          <Description>
            <p>{`${description}`}</p>
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
              {`// code snippet`}
            </SyntaxHighlighter>
          </CodeSnippet>
          <Repo>
            <label>Link to Repo:</label>
            <a href="http://github.com">https://github.com/user-name</a>
          </Repo>
        </TicketInfo>
        {this.state.assigned && <CommentSection />}
        <ButtonContainer>
          <button onClick={this.assignTicket}>
            {this.state.assigned ? "UNNASSIGN" : "ASSIGN"}
          </button>
        </ButtonContainer>
      </Container>
    );
  }
}

export default ViewTicket;

/*
const CommentSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const Comment = styled.div`
  display: flex;
  flex-direction: column;

  border-bottom: 1px solid black;
`;

const ReplySection = styled.div`
  display: flex;
  flex-direction: column;

  textarea {
    width: 100%;
    height: 200px;
    resize: horizontal;
  }

  div {
    display: flex;
    justify-content: flex-end;
  }
`;


<CommentSection>
          <Comment>
            <span>Rebbecca Young · 7/10/2019</span>
            <p>Have you tried this?</p>
            <SyntaxHighlighter
              language="javascript"
              style={tomorrowNightEighties}
              customStyle={{
                fontFamily: "Courier",
                width: "100%",
                resize: "vertical",
                fontSize: "1.2rem"
              }}
            >
              {codeSnippet2}
            </SyntaxHighlighter>
          </Comment>
          <Comment>
            <span>Rebbecca Young · 7/10/2019</span>
            <p>No I haven't! That fixed my problem, thank you!</p>
          </Comment>
        </CommentSection>
        <ReplySection>
          <textarea placeholder="Leave your reply here..." />
          <div>
            <button>Unnassign</button>
            <button>Mark Resolved</button>
            <button>Reply</button>
          </div>
        </ReplySection>

*/
