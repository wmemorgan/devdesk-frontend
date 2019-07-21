import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 1000px;
  height: fit-content;

  margin-top: 50px;

  border: 1px solid black;

  box-shadow: 5px 5px 5px rgb(0, 0, 0, 0.2);
`;

export const FormHeader = styled.div`
  padding: 10px 15px;

  border-bottom: 1px solid black;

  color: white;
  background-color: #394141;

  h1 {
    font-size: 1.6rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  padding: 10px 15px;

  width: 100%;
  height: fit-content;

  background: linear-gradient(180deg, #bdc9ca 0%, #9eaaab 100%);
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin: 10px 0;

  label {
    font-size: 1.6rem;
    font-weight: bold;
  }
  input,
  textarea,
  select {
    width: 100%;
    margin-top: 5px;
  }

  input,
  textarea {
    width: 100%;

    border: none;
    border-bottom: 1px solid black;

    padding: 3px 0;
    font-size: 1.4rem;

    background-color: transparent;

    outline: none;
  }

  textarea.code-snippet {
    font-family: "Courier";
    font-family: 1.4rem;
  }

  textarea {
    height: 100px;
    resize: vertical;
  }

  select {
    background-color: transparent;
    border: none;
    font-size: 1.4rem;
    outline: none;
    cursor: pointer;

    border-bottom: 1px solid black;
    -webkit-appearance: none;
    -webkit-border-radius: 0px;
    border-radius: 0px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px;

  button {
    width: 125px;
    height: 25px;

    border: none;
    box-shadow: 2px 2px 4px rgb(0, 0, 0, 0.5);

    color: white;
    font-size: 1.4rem;
    background-color: #658151;

    cursor: pointer;
  }
`;