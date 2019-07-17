import React from "react";
import { Link } from "react-router-dom";

export function RequireAuthentication(Component) {
  return class AuthenticatedComponent extends React.Component {
    isAuthenticated() {
      return this.props.isAuthenticated;
    }
    render() {
      const loginErrorMessage = (
        <div>
          Please <Link to="login">Log In</Link> or
          <Link to="register">Register</Link> in order to view this part of the
          application.
        </div>
      );

      return (
        <div>
          {this.isAuthenticated === true ? (
            <Component {...this.props} />
          ) : (
            loginErrorMessage
          )}
        </div>
      );
    }
  };
}

export default RequireAuthentication;
