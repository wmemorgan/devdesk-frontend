import styled from "styled-components";
import { color, fontSizing, flex } from "./theme";

export const Container = styled.div`
  ${flex("column", "center")};

  width: 100%;
  height: 100vh;
`;

export const StyledTopBar = styled.div`
  ${flex("row", "normal", "center")}
  width: 100%;
  height: fit-content;

  padding: 20px 40px;

  border-bottom: 1px solid black;

  background-color: ${color.topBarBgColor};

  h1 {
    font-size: ${fontSizing.l};
  }
`;

export const NavContainer = styled.div`
  ${flex("row", "center", "space-between")};
  width: 100%;
  max-width: 1000px;
  flex-grow: 1;
`;

export const Nav = styled.nav`
  ${flex("row", "normal", "space-between")}

  width: 100%;
  max-width: 350px;

  a {
    font-size: ${fontSizing.m};
    text-decoration: none;
    color: ${color.primaryTextColor};
  }

  @media (max-width: 800px) {
    display: ${props => (props.menuOpen ? "flex" : "none")};
    flex-direction: column;

    position: absolute;
    top: 72px;

    max-width: 100%;

    margin-left: -40px;

    background-color: ${color.mainBgColor};

    a {
      width: 100%;
      text-align: right;
      padding: 10px;
      border-bottom: 1px solid black;
    }
  }
`;

export const MenuIconWrapper = styled.div`
  display: none;

  img {
    cursor: pointer;
  }

  @media (max-width: 800px) {
    display: block;
  }
`;
