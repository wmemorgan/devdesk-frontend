import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;

  margin: 30px 0;
`;

export const TicketCount = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 200px;
  border: 1px solid black;
  border-radius: 3px;

  color: white;
  font-size: 1.4rem;

  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);

  div {
    display: flex;
    justify-content: space-between;

    border-bottom: 1px solid black;
    padding: 0 5px;

    background-color: ${({ theme }) => theme.color.topBarBgColor};

    span {
      width: 50%;
      padding: 5px 0;

      text-align: center;
    }

    span:first-of-type {
      border-right: 1px solid black;
    }
  }

  div:last-of-type {
    border-bottom: none;

    padding: 0;

    color: black;

    button {
      width: 50%;

      padding: 5px 0;

      border: none;
      outline: none;
      border-right: 1px solid black;

      font-size: 1.4rem;
      font-weight: bold;
      text-align: center;

      background-color: #acb8b9;
      &:hover {
        background-color: #98a4a5;
      }
      cursor: pointer;
    }

    button.total-all {
      ${props =>
        props.status === 'all'
          ? css`
              box-shadow: inset 3px 3px 5px rgb(0, 0, 0, 0.5);
              background-color: #98a4a5;
            `
          : css`
              background-color: #acb8b9;
            `};
    }
    button.total-assigned {
      ${props =>
        props.status === 'assigned'
          ? css`
              box-shadow: inset 3px 3px 5px rgb(0, 0, 0, 0.5);
              background-color: #98a4a5;
            `
          : css`
              background-color: #acb8b9;
            `};
    }
  }
`;

export const StatusFilters = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 200px;

  border: 1px solid black;

  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);

  div:first-of-type {
    width: 100%;
    padding: 5px 0;
    background-color: ${({ theme }) => theme.color.topBarBgColor};

    font-size: 1.4rem;

    span {
      display: flex;
      justify-content: center;
      align-items: center;

      color: white;
    }
  }

  div:last-of-type {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    font-size: 1.2rem;

    button {
      display: flex;
      justify-content: center;
      align-items: center;

      width: calc(100% / 3);
      height: 100%;

      padding: 5px 0;

      font-weight: bold;

      border: none;
      outline: none;
      border-right: 1px solid black;

      cursor: pointer;
    }

    button.status-all {
      ${props =>
        props.status === 'all'
          ? css`
              box-shadow: inset 3px 3px 5px rgb(0, 0, 0, 0.5);
              background-color: #9aa6a7;
            `
          : css`
              background-color: #acb8b9;
            `};
    }

    button.status-open {
      ${props =>
        props.status === 'open'
          ? css`
              box-shadow: inset 3px 3px 5px rgb(0, 0, 0, 0.5);
              background-color: #4b5f3c;
            `
          : css`
              background-color: #546b43;
            `};
    }

    button.status-resolved {
      border-right: none;
      ${props =>
        props.status === 'resolved'
          ? css`
              box-shadow: inset 3px 3px 5px rgb(0, 0, 0, 0.5);
              background-color: #5e808d;
            `
          : css`
              background-color: #6b93a2;
            `};
    }
  }
`;
