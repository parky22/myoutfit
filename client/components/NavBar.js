import React from 'react';
import { Link } from 'react-router';
import { Nav, NavUl, NavLink } from './style/navStyle';
import { Header } from './style/mainS
tyle';

export default props => {
  return (
    <Nav>
      <NavUl id="nav-mobile" className="right hide-on-med-and-down">
        {
          props.loggedIn ?
            <div>
              <li><NavLink to="/home">home</NavLink></li>
              <li><NavLink to="/addClothing">add piece</NavLink></li>
              <li><NavLink to="/closet">closet</NavLink></li>
              <li><NavLink to="/" onClick={props.handleClick}>logout</NavLink></li>
            </div>
            :
            <div>
              <li><NavLink to="/login">login</NavLink></li>
              <li><NavLink to="/signup">signup</NavLink></li>
            </div>
        }
      </NavUl>
    </Nav>
  )
};
