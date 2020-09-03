import styled from "styled-components";
import img from "../assets/landing-page-background.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  width: 100%;
  height: 100vh;

  background-color: #101b11;
`;

export const Hero = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 100%;
  max-width: 1100px;
  height: 600px;

  margin-top: 10vh;

  background: url(${img}) no-repeat;

  @media(max-width: 800px) {
    justify-content: center;
    background: none;
  }

  /* border: 1px solid white; */
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 300px;
  height: fit-content;

  margin-right: 125px;

  /* border: 1px solid white; */

  h1 {
    color: #d2d2d2;
    font-size: 5rem;
    font-weight: 400;
    font-family: "Source Code Pro", monospace;
  }

  @media(max-width: 800px) {
    margin-right: 0;
  }
`;

export const FormLinkContainer = styled.div`
  display: flex;
  margin: 40px 0;

  button {
    border: none;
    outline: none;

    color: #d2d2d2;
    font-size: 2.2rem;
    font-weight: 300;
    font-family: "Source Code Pro", monospace;
    text-decoration: none;

    background-color: transparent;

    cursor: pointer;
  }

  button:first-of-type {
    margin-right: 50px;
  }
`;


export const Form = styled.form`
  display: flex;
  flex-direction: column;

  padding: 10px 15px;

  width: 100%;
  height: fit-content;

  span.login-error {
    width: 100%;
    text-align:center;
    padding-top: 5px;
    color: red;
    font-size: 1.2rem;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  font-family: "Source Code Pro", monospace;

  margin: 10px 0;

  input {
    width: 100%;

    border: none;
    border-bottom: 1px solid #d2d2d2;

    padding: 3px 0;

    color: #d2d2d2;
    font-size: 1.4rem;
    font-family: "Source Code Pro", monospace;

    background-color: transparent;

    outline: none;
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

  span {
    padding-top: 5px;
    color: red;
    font-size: 1.2rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    width: fit-content;
    height: 25px;

    border: none;
    outline: none;

    color: white;
    font-size: 1.4rem;
    font-family: "Source Code Pro", monospace;

    background-color: transparent;

    cursor: pointer;
  }
`;