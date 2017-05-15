import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { logout } from '../reducer/user';
import NavBar from './NavBar';
import Footer from './Footer';

const Main = props => {

  const { children, handleClick, user } = props;
  const loggedIn = !!user.id;

  return (
    <div>
      <NavBar loggedIn={loggedIn} handleClick={handleClick} />
      {children}
      <Footer />
    </div>
  );
};

const mapState = ({ user }) => ({ user });

const mapDispatch = dispatch => ({
  handleClick() {
    dispatch(logout());
  }
});

export default connect(mapState, mapDispatch)(Main);
