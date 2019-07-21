import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { Redirect } from "react-router-dom";
import {Container, FormHeader, Form, InputWrapper, ButtonContainer } from "../../styled-components/TicketForm_Styles";
import { Auth } from "../../authentication/Authentication";


export default class Register extends Component {
  //State
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    redirectToReferrer: false,
    formError: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    }
  };

  // Axios Calls
  registerUser = e => {
    e.preventDefault();

    if(this.formValidated()) {
      const {firstName, lastName, email, password} = this.state;
      const { setActiveUser } = this.props;

      const user = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
      };

      axios
        .post("https://api-devdesk.herokuapp.com/api/register", user)
        .then((res) => {
          return axios.post("https://api-devdesk.herokuapp.com/api/login", {
            email: email,
            password: password
          })
        })
        .then(res => {
          Auth.authenticate(() => {
            this.setState({ redirectToReferrer: true });
            setActiveUser(res.data.user);
          });
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  };

  formValidated() {
    let isValid = true;
    const { firstName, lastName, email, password } = this.state;
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    const newFormError = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };

    if (!firstName) {
      newFormError.firstName = "Please enter your first name.";
      isValid = false;
    }
    if (!lastName) {
      newFormError.lastName = "Please enter your last name.";
      isValid = false;
    }
    if (!email) {
      newFormError.email = "Please enter your email address.";
      isValid = false;
    }
    else if (!emailRegex.test(email)) {
      newFormError.email = "Please enter a valid email address.";
    }
    if (!password) {
      newFormError.password = "Please enter your password";
      isValid = false;
    }

    if (!isValid) {
      this.setState({
        ...this.state,
        formError: newFormError
      });
    }
    return isValid;
  }

  //Handlers
  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  // handleLogin = e => {
  //   this.props.history.push("/dashboard");
  // };
  render() {
    const { redirectToReferrer, formError } = this.state;

    if (redirectToReferrer === true) {
      return <Redirect to="/tickets" />;
    }

    return (
      <Container>
        <FormHeader>
          <h1>Register</h1>
        </FormHeader>
          <Form onSubmit={this.registerUser}>
            <InputWrapper>
              <label>Name</label>
              <input
                type="text"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
              />
              {formError.firstName && <span>{formError.firstName}</span>}
            </InputWrapper>
            <InputWrapper>
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
              />
              {formError.lastName && <span>{formError.lastName}</span>}
            </InputWrapper>
            <InputWrapper>
              <label>Email</label>
              <input
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
              {formError.email && <span>{formError.email}</span>}
            </InputWrapper>
            <InputWrapper>
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
              {formError.password && <span>{formError.password}</span>}
            </InputWrapper>
            <ButtonContainer>
              <button onClick={this.registerUser}>Register</button>
            </ButtonContainer>
          </Form>
      </Container>
    );
  }
}
