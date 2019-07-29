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

export default class Register extends Component {
  //State
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    redirectToReferrer: false,
    formError: {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    },
    registering: false,
    registerFailed: false
  };

  // Axios Calls
  registerUser = e => {
    e.preventDefault();

    if (this.formValidated()) {
      const { firstName, lastName, email, password } = this.state;
      const { setActiveUser } = this.props;

      const user = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password
      };

      this.setState({ registering: true });

      axios
        .post('https://api-devdesk.herokuapp.com/api/register', user)
        .then(res => {
          this.setState({
            registering: false,
            registerFailed: false
          });
          return axios.post('https://api-devdesk.herokuapp.com/api/login', {
            email: email,
            password: password
          });
        })
        .then(res => {
          this.setState({
            registering: false,
            registerFailed: false
          });

          Auth.authenticate(() => {
            this.setState({ redirectToReferrer: true });
            setActiveUser(res.data.user);
          });
        })
        .catch(error => {
          this.setState({
            registering: false,
            registerFailed: true
          });
        });
    }
  };

  formValidated() {
    let isValid = true;
    const { firstName, lastName, email, password } = this.state;
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    const newFormError = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    };

    if (!firstName) {
      newFormError.firstName = 'Please enter your first name.';
      isValid = false;
    }
    if (!lastName) {
      newFormError.lastName = 'Please enter your last name.';
      isValid = false;
    }
    if (!email) {
      newFormError.email = 'Please enter your email address.';
      isValid = false;
    } else if (!emailRegex.test(email)) {
      newFormError.email = 'Please enter a valid email address.';
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

  //Handlers
  handleChange = e => {
    this.setState({
      ...this.state,
      registerFailed: false,
      [e.target.name]: e.target.value
    });
  };

  render() {
    const {
      registering,
      redirectToReferrer,
      formError,
      registerFailed
    } = this.state;
    const { goBack } = this.props;

    if (redirectToReferrer === true) {
      return <Redirect to='/tickets' />;
    }

    return (
      // <Container>
      //   <FormHeader>
      //     <h1>Register</h1>
      //   </FormHeader>
      <Form onSubmit={this.registerUser}>
        <InputWrapper>
          {/* <label>Name</label> */}
          <input
            type='text'
            placeholder='First Name'
            name='firstName'
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          {formError.firstName && <span>{formError.firstName}</span>}
        </InputWrapper>
        <InputWrapper>
          {/* <label>Last Name</label> */}
          <input
            type='text'
            placeholder='Last Name'
            name='lastName'
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          {formError.lastName && <span>{formError.lastName}</span>}
        </InputWrapper>
        <InputWrapper>
          {/* <label>Email</label> */}
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
          {/* <label>Password</label> */}
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
          <button onClick={this.registerUser}>Register</button>
        </ButtonContainer>
        <PropagateLoader
          css={`
            margin-left: calc(100% / 2);
            margin-top: 15px;
          `}
          sizeUnit={'px'}
          size={10}
          color={'#d2d2d2'}
          loading={registering}
        />
        {registerFailed && (
          <span className='login-error'>
            Cannot register you at this time.
            <br />
            Please try again later.
          </span>
        )}
      </Form>
      // </Container>
    );
  }
}
