import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { logout } from '../reducer/user';
import NavBar from './NavBar';
import Footer from './Footer';
import { ChildrenWrapper, StyledLink, Wrapper } from './style/mainStyle'
import { Header, HeaderLink } from './style/headerStyle';

const Main = props => {

  const { children, handleLogout, user } = props;
  const loggedIn = !!user.id;

  return (
    <Wrapper>
      <Header><HeaderLink to="/landing">myoutfit</HeaderLink></Header>
      <NavBar loggedIn={loggedIn} handleLogout={handleLogout} user={user}/>
      <ChildrenWrapper>
        {children}
      </ChildrenWrapper>
      <Footer />
    </Wrapper>
  );
};

const mapState = ({ user }) => ({ user });

const mapDispatch = dispatch => ({
  handleLogout() {
    dispatch(logout());
  }
});

export default connect(mapState, mapDispatch)(Main);
