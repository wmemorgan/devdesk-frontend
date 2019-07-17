import styled from "styled-components";
import { color, fontSizing } from "./theme";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 5% 20% 10% 15% 15% 15% 10% 10%;
  width: 100%;

  @media (max-width: 800px) {
    grid-template-columns: 8% 27% 15% 20% 15% 15%;
    div:nth-child(5),
    div:nth-child(6) {
      display: none;
    }
  }

  @media (max-width: 500px) {
    grid-template-columns: 5% 40% 20% 20% 20%;
  }

  padding: 5px 15px;

  border: 1px solid black;
  border-bottom: none;

  border-radius: 3px 3px 0 0;

  background-color: ${color.ticketHeaderColor};

  -webkit-box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 4px 4px 10px rgba (0, 0, 0, 0.5);
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);

  div {
    display: flex;
    align-items: center;

    color: ${color.primaryTextColor};
    font-size: ${fontSizing.s};

    span {
      padding-right: 7px;
    }
  }
`;

export const SortIcons = styled.div`
  display: flex;
  flex-direction: column;

  cursor: pointer;

  img:last-of-type {
    margin-top: -4px;
  }
`;
