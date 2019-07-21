import React, { Component } from "react";
import styled from "styled-components";
import { UserInfo } from "./UserInfo";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Message = styled.p`
  font-size: 1.4rem;
  padding: 10px 30px;
`;

class CommentSection extends Component {
  render() {
    const {comments} = this.props;
    return (
      <Container>
        {comments.map((comment, i) => {
          return (
            <CommentContainer key={i}>
              <UserInfo openedBy={comment.opened_by} createdAt={comment.opened_by.created_at} bottom/>
              <Message>{comment.comment}</Message>
              {/* <button onClick={() => this.props.deleteComment(comment.id)}>Delete Comment</button> */}
            </CommentContainer>
          )
        })}
      </Container>
    );
  }
}

export default CommentSection;
