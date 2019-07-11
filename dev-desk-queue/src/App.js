import React from "react";
import LandingPage from "./LandingPage/LandingPage";
import { BrowserRouter as Router } from "react-router-dom";

/*
  Landing Page
  Login/Signup
  Will Route to Dashboard after Login
*/
class App extends React.Component {
  render() {
    return (
      <Router>
        <LandingPage />
      </Router>
    );
  }
}

export default App;
