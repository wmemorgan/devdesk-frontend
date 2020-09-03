import React, { Component } from "react";
import styled from "styled-components";
import { UserInfo } from "./UserInfo";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNightEighties } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Message = styled.div`
  font-size: 1.4rem;
  padding: 10px 30px;
`;

class CommentSection extends Component {
  splitComment = comment => {
    return comment.split("```");
  };

  render() {
    const { comments } = this.props;
    return (
      <Container>
        {comments.map((comment, i) => {
          return (
            <CommentContainer key={i}>
              <UserInfo
                openedBy={comment.opened_by}
                createdAt={comment.opened_by.created_at}
                bottom
              />
              <Message style={{ whiteSpace: "pre-wrap" }}>
                {this.splitComment(comment.comment).map((string, i) => {
                  console.log('string',i, string);
                  return i % 2 === 0 ? (
                    string
                  ) : (
                    <SyntaxHighlighter
                      language="text"
                      style={tomorrowNightEighties}
                      customStyle={{
                        fontFamily: "Courier",
                        width: "100%",
                        fontSize: "1.2rem"
                      }}
                    >
                      {string}
                    </SyntaxHighlighter>
                  );
                })}
              </Message>
              {/* <Message style={{whiteSpace: "pre-wrap"}}>{comment.comment}</Message> */}
              {/* <button onClick={() => this.props.deleteComment(comment.id)}>Delete Comment</button> */}
            </CommentContainer>
          );
        })}
      </Container>
    );
  }
}

export default CommentSection;
