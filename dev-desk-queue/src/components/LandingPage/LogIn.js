import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import {
  Form,
  InputWrapper,
  ButtonContainer
} from '../../styled-components/LandingPage_Styles';
import { Auth } from '../../authentication/Authentication';
import { PropagateLoader } from 'react-spinners';

export default class LogIn extends Component {
  //State
  state = {
    email: '',
    password: '',
    redirectToReferrer: false,
    formError: {
      email: '',
      password: ''
    },
    loggingIn: false,
    loginFailed: false
  };

  loginAuth = event => {
    event.preventDefault();

    if (this.formValidated()) {
      const { setActiveUser } = this.props; // method passed down from App.js

      const user = {
        email: this.state.email,
        password: this.state.password,
        redirectToReferrer: true
      };

      this.setState({ loggingIn: true });

      axios
        .post('https://api-devdesk.herokuapp.com/api/login', user)
        .then(response => {
          this.setState({
            loggingIn: false,
            loginFailed: false
          });

          Auth.authenticate(() => {
            this.setState({ redirectToReferrer: true });
            setActiveUser(response.data.user);
          });
        })
        .catch(error => {
          this.setState({
            loggingIn: false,
            loginFailed: true
          });
        });
    }
  };

  //Handlers
  handleChange = e => {
    this.setState({
      ...this.state.user,
      loginFailed: false,
      [e.target.name]: e.target.value
    });
  };

  formValidated() {
    let isValid = true;
    const { email, password } = this.state;
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    const newFormError = {
      email: '',
      password: ''
    };

    if (!email) {
      newFormError.email = 'Please enter your email address.';
      isValid = false;
    } else if (!emailRegex.test(email)) {
      newFormError.email = 'An invalid email address was entered.';
    }
    if (!password) {
      newFormError.password = 'Please enter your password';
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

  render() {
    const {
      loggingIn,
      redirectToReferrer,
      formError,
      loginFailed
    } = this.state;
    const { goBack } = this.props;
    if (redirectToReferrer === true) {
      return <Redirect to='/tickets' />;
    }

    return (
      <Form onSubmit={this.loginAuth}>
        <InputWrapper>
          <input
            type='text'
            placeholder='Email'
            name='email'
            value={this.state.email}
            onChange={this.handleChange}
          />
          {formError.email && <span>{formError.email}</span>}
        </InputWrapper>
        <InputWrapper>
          <input
            type='password'
            placeholder='Password'
            className='form-control'
            name='password'
            value={this.state.password}
            onChange={this.handleChange}
          />
          {formError.password && <span>{formError.password}</span>}
        </InputWrapper>
        <ButtonContainer>
          <button type='button' onClick={goBack}>
            Go Back
          </button>
          <button onClick={this.loginAuth}>Log in</button>
        </ButtonContainer>
        <PropagateLoader
          css={`
            margin-left: calc(100% / 2);
            margin-top: 15px;
          `}
          sizeUnit={'px'}
          size={10}
          color={'#d2d2d2'}
          loading={loggingIn}
        />
        {loginFailed && (
          <span className='login-error'>Your account was not found.</span>
        )}
      </Form>
    );
  }
}
