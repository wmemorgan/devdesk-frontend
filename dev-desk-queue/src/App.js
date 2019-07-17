import React from "react";
import LandingPage from "./LandingPage/LandingPage";
import { BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./components/Dashboard";


class App extends React.Component {

state = {
  
};

  render() {
    return (
      <Router>
        <LandingPage />
        <Dashboard/>
      </Router>
    );
  }
}

export default App;
