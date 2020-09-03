import styled from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => theme.flex('column', 'center')};
  width: 100%;
  height: 100vh;
`;

export const TopBar = styled.div`
  ${({ theme }) => theme.flex('row', 'normal', 'center')}
  width: 100%;
  height: fit-content;

  padding: 15px 40px;

  border-bottom: 1px solid black;

  background-color: ${({ theme }) => theme.color.topBarBgColor};

  h1 {
    font-size: ${({ theme }) => theme.fontSizing.l};
  }
`;

export const NavContainer = styled.div`
  ${({ theme }) => theme.flex('row', 'center', 'space-between')};
  width: 100%;
  max-width: 1000px;
  flex-grow: 1;
`;

export const Nav = styled.nav`
  ${({ theme }) => theme.flex('row', 'normal', 'space-between')}

  width: 100%;
  max-width: 350px;

  a {
    font-size: ${({ theme }) => theme.fontSizing.m};
    text-decoration: none;
    color: ${({ theme }) => theme.color.primaryTextColor};
  }

  @media (max-width: 800px) {
    display: ${props => (props.menuOpen ? 'flex' : 'none')};
    flex-direction: column;

    position: absolute;
    top: 57px;

    max-width: 100%;

    margin-left: -40px;

    background-color: ${({ theme }) => theme.color.mainBgColor};

    a {
      width: 100%;
      text-align: right;
      padding: 10px;
      border-bottom: 1px solid black;
    }
  }
`;

export const MenuIconWrapper = styled.div`
  display: none;

  img {
    cursor: pointer;
  }

  @media (max-width: 800px) {
    display: block;
  }
`;
