import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Auth } from '../../authentication/Authentication';
import * as S from '../../styled-components/TopBar_Styles';

export default class TopBar extends Component {
  state = {
    menuOpen: false
  };

  toggleMenuIcon = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };

  render() {
    const { menuOpen } = this.state;
    return (
      <>
        {Auth.isAuthenticated && (
          <S.TopBar>
            <S.NavContainer>
              <Link to='/tickets'>
                <h1 style={{ color: 'white' }}>DevDesk_Q</h1>
              </Link>
              <S.Nav menuOpen={menuOpen} onClick={this.toggleMenuIcon}>
                <NavLink to='/tickets' activeStyle={{ color: '#dddddd' }}>
                  TICKETS
                </NavLink>
                <NavLink to='/new-ticket' activeStyle={{ color: '#dddddd' }}>
                  OPEN NEW TICKET
                </NavLink>
                <NavLink
                  to='/'
                  activeStyle={{ color: '#dddddd' }}
                  onClick={() => Auth.signout()}
                >
                  LOGOUT
                </NavLink>
              </S.Nav>
              <S.MenuIconWrapper>
                <img
                  style={{ height: '25px' }}
                  src='https://img.icons8.com/ios-glyphs/30/FFFFFF/menu.png'
                  onClick={this.toggleMenuIcon}
                  alt='Menu Icon'
                />
              </S.MenuIconWrapper>
            </S.NavContainer>
          </S.TopBar>
        )}
      </>
    );
  }
}
