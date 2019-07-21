import styled from "styled-components";
import { color, fontSizing } from "./theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 1000px;
  height: fit-content;

  margin-top: 50px;

  border: 1px solid black;

  background: linear-gradient(180deg, #bdc9ca 0%, #9eaaab 100%);

  box-shadow: 5px 5px 5px rgb(0, 0, 0, 0.2);
`;

export const TicketInfo = styled.div`
  height: fit-content;
`;

export const TicketHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px 15px;

  border-bottom: 1px solid black;

  color: white;
  background-color: #394141;

  h1 {
    font-size: 1.6rem;
  }

  span {
    font-size: 1.6rem;
    font-weight: light;
  }
`;

export const StyledUserInfo = styled.div`
  padding: 10px 15px;
  display: flex;
  align-items: center;

  width: 100%;

  padding-bottom: 5px;
  
  border-bottom: ${props => props.bordered ? "1px solid grey" : "none"};

  span.opened-by {
    font-weight: 400;
    font-size: 1.6rem;
  }
  span.date {
    padding-left: 5px;
    font-size: 1.4rem;
    font-weight: 300;
  }

`;

export const Description = styled.div`
  padding: 10px 15px;
  font-size: 1.6rem;

  p {
    font-weight: bold;
  }
`;

export const StyledCodeSnippet = styled.div`
  padding: 10px 15px;
`;

export const StyledRepo = styled.div`
  padding: 10px 15px;

  font-size: 1.4rem;

  border-bottom: 1px solid black;

  label {
    font-weight: 600;
    margin-right: 10px;
  }
`;

export const CommentSectionHeader = styled.div`
  width: 100%;
  border-bottom: 1px solid black;

  span {
    color: white;
    background-color: #394141;
    margin-left: 30px;
  }
`;

export const StyledButtonContainer = styled.div`
  padding: 10px 15px;
  display: flex;
  justify-content: flex-end;

  margin: 5px;

  button {
    width: 100px;
    height: 25px;

    margin-left: 10px;

    border: none;
    outline: none;
    box-shadow: 2px 2px 4px rgb(0, 0, 0, 0.5);

    color: white;
    font-size: 1.4rem;
    background-color: #658151;

    cursor: pointer;
  }

  button:nth-of-type(2) {
    width: 150px;
  }
`;

export const ReplyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin: 10px 0;
  padding: 10px 15px;

  textarea {
    width: 100%;
    height: 100px;
    resize: vertical;

    margin-top: 5px;
    padding: 5px;

    border: none;
    border: 1px solid black;

    color: white;
    font-size: 1.4rem;

    background-color: #444E50;

    outline: none;
  }
`;

export default {
  Container,
  TicketInfo,
  TicketHeader,
  StyledUserInfo,
  Description,
  StyledCodeSnippet,
  ReplyWrapper,
  StyledRepo,
  StyledButtonContainer
};
