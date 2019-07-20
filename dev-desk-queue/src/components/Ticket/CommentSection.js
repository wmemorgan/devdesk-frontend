import React, { Component } from "react";
import styled from "styled-components";
import { OpenedByComment } from "./OpenedByComment";
import { CreatedAt } from "./CreatedAt";
import {UserInfo} from "../../styled-components/Ticket_Styles";

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
    const {comments, users} = this.props;
    return (
      <Container>
        {comments.map((comment, i) => (
          <CommentContainer key={i}>
            <UserInfo>
              <OpenedByComment className="opened-by" comment={comment} users={users} />
              <CreatedAt className="date" createdAt={comment.created_at} />
            </UserInfo>
            <Message>{comment.comment}</Message>
          </CommentContainer>
        ))}
      </Container>
    );
  }
}

export default CommentSection;
