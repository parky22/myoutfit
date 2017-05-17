import React from 'react';
import { Nav, NavUl, NavLink } from './style/navStyle';

export default props => {
  return (
    <Nav>
      <NavUl>
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
