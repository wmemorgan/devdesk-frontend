import React, { Component } from "react";
import {Container, Hero, FormContainer, FormLinkContainer} from "../../styled-components/LandingPage_Styles";
import Register from "./Register";
import LogIn from "./LogIn";

export default class LandingPage extends Component {
  state = {
    displayRegister: false,
    displayLogin: false
  };

  displayRegister = () => {
    this.setState({
      displayRegister: true,
      displayLogin: false
    });
  };

  displayLogin = () => {
    this.setState({
      displayRegister: false,
      displayLogin: true
    });
  };

  goBack = () => {
    console.log("go back");
    this.setState({
      displayRegister: false,
      displayLogin: false
    });
  };

  render() {
    const { displayRegister, displayLogin } = this.state;
    const { setActiveUser } = this.props;
    return (
      <Container>
        <Hero>
          <FormContainer>
            <h1>DevDesk_Q</h1>
            {!displayRegister && !displayLogin && (
              <FormLinkContainer>
                <button name="displayLogin" onClick={this.displayLogin}>
                  Login
                </button>
                <button name="displayRegister" onClick={this.displayRegister}>
                  Register
                </button>
              </FormLinkContainer>
            )}
            {displayRegister && (
              <Register setActiveUser={setActiveUser} goBack={this.goBack} />
            )}
            {displayLogin && (
              <LogIn setActiveUser={setActiveUser} goBack={this.goBack} />
            )}
          </FormContainer>
        </Hero>
      </Container>
    );
  }
}
