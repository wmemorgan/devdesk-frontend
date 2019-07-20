import React from "react";
import LandingPage from "./LandingPage/LandingPage";
import { BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./components/Dashboard";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Dashboard />
      </Router>
    );
  }
}

export default App;
