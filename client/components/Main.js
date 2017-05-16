import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { logout } from '../reducer/user';
import NavBar from './NavBar';
import Footer from './Footer';
import { ChildrenWrapper, StyledLink, Wrapper } from './style/style'
import { Header, HeaderLink } from './style/headerStyle';


const Main = props => {

  const { children, handleClick, user } = props;
  const loggedIn = !!user.id;

  return (
    <Wrapper>
      <Header><HeaderLink to="/home">myoutfit</HeaderLink></Header>
      <NavBar loggedIn={loggedIn} handleClick={handleClick} />
      <ChildrenWrapper>
        {children}
      </ChildrenWrapper>
      <Footer />
    </Wrapper>
  );
};

const mapState = ({ user }) => ({ user });

const mapDispatch = dispatch => ({
  handleClick() {
    dispatch(logout());
  }
});

export default connect(mapState, mapDispatch)(Main);
