import React from "react";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";

/*
  Private Route will be migrated into separate module to be exported to rest of application

  All Auth components will be migrated into an authentication sub directory
*/

class App extends React.Component {
  render() {
    return (
      <Router>
        {/* Common Top Bar w/ Nav --- Links rendered based on authentication toggle */}
        {/* Conditional render of LandingPage/Dashboard based on authentication toggle
            Stretch: implement HOC that returns either LandingPage or Dashboard based on
                     authentication toggle
          */}
        <LandingPage />
      </Router>
    );
  }
}

export default App;

/*


*/
