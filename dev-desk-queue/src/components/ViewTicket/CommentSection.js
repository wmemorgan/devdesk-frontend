import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Comment = styled.div`
  display: flex;
`;

const UserInfo = styled.div`
  padding: 10px 15px;

  p {
    display: flex;
    align-items: center;

    width: 100%;

    padding-bottom: 5px;
    border-bottom: 1px solid grey;

    span.user-name {
      font-weight: 400;
      font-size: 1.6rem;
    }
    span.date {
      padding-left: 5px;
      font-size: 1.4rem;
      font-weight: 300;
    }
  }
`;

class CommentSection extends Component {
  render() {
    return (
      <Container>
        <Comment>
          <UserInfo>
            <p>
              <span className="user-name">Rebecca Young · </span>
              <span className="date"> 7/10/2019</span>
            </p>
          </UserInfo>
        </Comment>
      </Container>
    );
  }
}

export default CommentSection;
