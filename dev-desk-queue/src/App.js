import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import Dashboard from "./components/Dashboard";

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
