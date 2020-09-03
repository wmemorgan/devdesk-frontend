import React from 'react';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { Container } from './styled-components/TopBar_Styles';
import { Route } from 'react-router-dom';
import { Auth } from './authentication/Authentication';
import LandingPage from './components/LandingPage/LandingPage';
import TicketForm from './components/TicketForm/TicketForm';
import TicketList from './components/TicketList/TicketList';
import Register from './components/LandingPage/Register';
import Ticket from './components/Ticket/Ticket';
import TopBar from './components/TopBar/TopBar';
import LogIn from './components/LandingPage/LogIn';

class App extends React.Component {
  state = {
    activeUser: {},
    topBarHidden: false
  };

  setActiveUser = activeUser => {
    this.setState({
      activeUser
    });
  };

  topBarHidden = toggle => {
    this.setState({
      topBarHidden: toggle
    });
  };

  render() {
    const { activeUser } = this.state;

    return (
      <Container>
        {Auth.isAuthenticated && <TopBar topBarHidden={this.topBarHidden} />}
        <Route
          exact
          path='/'
          render={props => (
            <LandingPage {...props} setActiveUser={this.setActiveUser} />
          )}
        />
        <Route
          path='/login'
          render={props => (
            <LogIn {...props} setActiveUser={this.setActiveUser} />
          )}
        />
        <Route
          path='/register'
          render={props => (
            <Register {...props} setActiveUser={this.setActiveUser} />
          )}
        />
        <PrivateRoute
          exact
          path='/tickets'
          component={TicketList}
          activeUser={activeUser}
        />
        <PrivateRoute
          path='/tickets/:id'
          component={Ticket}
          activeUser={activeUser}
        />
        <PrivateRoute
          path='/new-ticket'
          component={TicketForm}
          activeUser={activeUser}
        />
      </Container>
    );
  }
}
export default App;
