import React from "react";
import LandingPage from "./LandingPage/LandingPage";
import { BrowserRouter as Router } from "react-router-dom";




class App extends React.Component {

state = {
  
};

  render() {
    return (
      <Router>
        <LandingPage />
      </Router>
    );
  }
}

export default App;
