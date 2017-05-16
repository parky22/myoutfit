import React from 'react';
import { Link } from 'react-router';
import { Nav, NavUl, NavLink } from './style/navStyle';
import { Header } from './style/style';

export default props => {
  return (
    <Nav>
      <NavUl id="nav-mobile" className="right hide-on-med-and-down">
        {
          props.loggedIn ?
            <div>
              <li><NavLink to="/addClothing">ADD PIECE</NavLink></li>
              <li><NavLink to="/home">HOME</NavLink></li>
              <li><NavLink to="/" onClick={props.handleClick}>LOGOUT</NavLink></li>
            </div>
            :
            <div>
              <li><NavLink to="/login">LOGIN</NavLink></li>
              <li><NavLink to="/signup">SIGNUP</NavLink></li>
            </div>
        }
      </NavUl>
    </Nav>
  )
};
