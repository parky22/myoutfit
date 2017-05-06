import React from 'react';
import { Link } from 'react-router';

export default props => {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/home" className="brand-logo">MYOUTFIT</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {
            props.loggedIn ?
            <span>
              <li><a href="sass.html">HOME</a></li>
              <li><a href="" onClick={props.handleClick}>LOGOUT</a></li>
            </span>
            :
            <span>
              <li><Link to="/login">LOGIN</Link></li>
              <li><Link to="/signup">SIGNUP</Link></li>
            </span>
          }
        </ul>
      </div>
    </nav>
      )
};
