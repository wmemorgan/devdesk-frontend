import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Feature1 from "./Feature1";
import Feature2 from "./Feature2";
import Feature3 from "./Feature3";
import Feature4 from "./Feature4";
import Home from "./Home/Home";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 2%;
  &:hover {
    color: aqua;
    transition: 0.3s;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.7);
  }
`;

const LinkWrapper = styled.div`
  background: rgb(0, 0, 0); /* The Fallback */
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  padding-top: 4%;
  padding-bottom: 4%;
`;

class Body extends Component {
  render() {
    return (
      <div>
        <LinkWrapper>
          <StyledLink to="/">Home</StyledLink>

          <StyledLink to="/Feature1">Feature1</StyledLink>

          <StyledLink to="/Feature2/">Feature2</StyledLink>

          <StyledLink to="/Feature3/">Feature3</StyledLink>

          <StyledLink to="/Feature4/">Feature4</StyledLink>
        </LinkWrapper>

        <Route path="/" exact component={Home} />
        <Route path="/Feature1" exact component={Feature1} />
        <Route path="/Feature2/" component={Feature2} />
        <Route path="/Feature3/" component={Feature3} />
        <Route path="/Feature4/" component={Feature4} />
      </div>
    );
  }
}

export default Body;
