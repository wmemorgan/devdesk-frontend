import React from "react";
import LandingPage from "./LandingPage/LandingPage";
import { BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./components/Dashboard";

/*
  Landing Page
  Login/Signup
  Will Route to Dashboard after Login
*/
class App extends React.Component {
//I NEED TO SET UP GLOBAL STATE TO STORE TOKEN.


  //Axios Calls
// componentDidMount() {
//   this.register();
//   this.login();
//  }

//  login = () => {
//    axios
//    .get("https://devdeskqueue-01.herokuapp.com/api/login")
//  }

//  register = () => {
//   axios
//   .get("https://devdeskqueue-01.herokuapp.com/api/register")
// }

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
