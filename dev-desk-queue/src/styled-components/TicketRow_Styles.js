import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  display: grid;
  align-items: center;
  grid-template-columns: 5% 20% 10% 15% 15% 15% 10% 10%;

  width: 100%;

  border: 1px solid black;

  margin: 0 0 5px 0;
  padding: 5px 15px;

  color: ${({ theme }) => theme.color.secondaryTextColor};
  font-size: ${({ theme }) => theme.fontSizing.s};
  text-decoration: none;

  cursor: pointer;

  background-color: ${({ theme }) => theme.color.ticketColor};

  &:hover {
    background-color: ${({ theme }) => theme.color.ticketColorHover};
  }

  &:nth-child(odd) {
    background-color: ${({ theme }) => theme.color.ticketColor_2};
  }

  &:nth-child(odd):hover {
    background-color: ${({ theme }) => theme.color.ticketColorHover};
  }

  -webkit-box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 4px 4px 10px rgba (0, 0, 0, 0.5);
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);

  div:nth-child(odd) {
    font-weight: bold;
  }
  div:nth-child(7) {
    font-weight: 400;
  }

  @media (max-width: 800px) {
    grid-template-columns: 8% 27% 15% 20% 15% 15%;
    div:nth-child(5),
    div:nth-child(6) {
      display: none;
    }
  }

  @media (max-width: 500px) {
    grid-template-columns: 8% 27% 15% 20% 15% 15%;
    div:nth-child(4) {
      padding-left: 10px;
    }
    div:nth-child(2) {
      padding-right: 5px;
    }
  }
`;

export const Status = styled.div`
  ${({ theme }) => theme.flex('row', 'center', 'center')}
  display: flex;
  justify-content: center;
  align-items: center;

  width: 60px;
  height: 30px;

  border: 1px solid black;
  border-radius: 3px;

  background-color: ${props =>
    props.closed
      ? props.theme.color.ticketClosed
      : props.theme.color.ticketOpen};

  color: ${({ theme }) => theme.color.primaryTextColor};
  font-weight: 300;

  @media (max-width: 500px) {
    font-size: 1rem;
    width: 50px;
  }
`;

export const StyledAssignButton = styled.button`
  cursor: pointer;

  border: 1px solid black;

  height: 25px;

  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);

  ${props => {
    if (props.status === 'assignable') {
      return css`
        color: white;
        background-color: ${({ theme }) => theme.color.assign};
      `;
    } else if (props.status === 'other-user-assigned') {
      return css`
        background-color: ${({ theme }) => theme.color.assigned};
        color: black;
        box-shadow: 0 0 0 #000;
      `;
    } else if (props.status === 'active-user-assigned') {
      return css`
        background-color: ${({ theme }) => theme.color.unassign};
        color: black;
      `;
    } else if (props.status === 'hidden') {
      return css`
        display: none;
      `;
    }
  }}

  @media (max-width: 500px) {
    /* grid-column-start: 2;
      grid-column-end: 6; */
    margin: 5px;
    width: 100%;
    height: 30px;
    font-size: 1rem;
  }
`;
