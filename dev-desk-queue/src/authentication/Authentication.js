// import React from "react";
// import { Link } from "react-router-dom";

// export function RequireAuthentication(Component) {
//   return class AuthenticatedComponent extends React.Component {
//     isAuthenticated() {
//       const token = localStorage.token;
      
//       return this.props.isAuthenticated;
//     }
    
//     render() {
//       const loginErrorMessage = (
//         <div>
//           Please <Link to="login">Log In</Link> or
//           <Link to="register">Register</Link> in order to view this part of the
//           application.
//         </div>
//       );

//       return (
//         <div>
//           {this.isAuthenticated === true ? (
//             <Component {...this.props} />
//           ) : (
//             loginErrorMessage
//           )}
//         </div>
//       );
//     }
//   };
// }

/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  Tried using the above, not really sure how to use it. 
  
  It seems like the ProtectedRoutes take care of hiding the pages from a user that
   isn't logged in.
*/

export const Auth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout() {
    this.isAuthenticated = false;
    
    // localStorage.removeItem("token"); 
    /* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
      Not sure what to do with the token at this point if the toggle protects the routes.
      
      At the moment, if I refresh the page, the authentication toggle is switched to false,
        and the user is routed to the Login page from the Protected Route.
      
      If the the token has some kind of expiration on the server that could be checked every so
        often, I might be able to keep the user logged in based on whether or not the token is
        still valid.
      
      Until then, the user is just going to have to login if they refresh the page.
    */

    // setTimeout(cb, 100);
  }
};

// export default RequireAuthentication;
