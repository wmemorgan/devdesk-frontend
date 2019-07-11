import React, { Component } from "react";
import styled from "styled-components";


const TitleWrapper = styled.div`
`;

const Title = styled.h1`
  padding-top:4%;
  margin:0;
  background: rgb(0, 0, 0); /* The Fallback */
  background: rgba(0, 0, 0, 0.5);
`;

class Header extends Component {
  render() {
    return (
      <TitleWrapper>
        <Title>DevDesk Queue</Title>
      </TitleWrapper>
    );
  }
}

export default Header;
