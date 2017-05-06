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
              <div>
                  <li><a href="/home">HOME</a></li>
                  <li><a href="" onClick={props.handleClick}>LOGOUT</a></li>
                  </div>
                :
                <div>
                  <li><Link to="/login">LOGIN</Link></li>
                  <li><Link to="/signup">SIGNUP</Link></li>
                </div>
            }
          </ul>
        </div>
    </nav>
  )
};
