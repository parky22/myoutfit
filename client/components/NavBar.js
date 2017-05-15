import React from 'react';
import { Link } from 'react-router';
import { Nav, NavUl, NavA } from './style';

export default props => {
  return (
    <Nav>
      <div>
          <Link to="/home" className="brand-logo">MYOUTFIT</Link>
          <NavUl id="nav-mobile" className="right hide-on-med-and-down">
            {
              props.loggedIn ?
              <div>
                  <li><a href="/addClothing">ADD PIECE</a></li>
                  <li><a href="/home">HOME</a></li>
                  <li><a href="" onClick={props.handleClick}>LOGOUT</a></li>
                  </div>
                :
                <div>
                  <li><Link to="/login">LOGIN</Link></li>
                  <li><Link to="/signup">SIGNUP</Link></li>
                </div>
            }
          </NavUl>
        </div>
    </Nav>
  )
};
