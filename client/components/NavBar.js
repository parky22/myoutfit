import React from 'react';
import { Nav, NavUl, NavLink } from './style/navStyle';
import { Login, Signup } from './Auth';

export default class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {
      loginClicked: false,
      signupClicked: false
    }
  }

  onLoginClick = () => {
    // make sure only login renders
    if(this.state.signupClicked) this.setState({signupClicked: false});

    this.setState({loginClicked: !this.state.loginClicked});
  }

  onSignupClick = () => {
    // make sure only signup renders
    if(this.state.loginClicked) this.setState({loginClicked: false});

    this.setState({signupClicked: !this.state.signupClicked});
  }

  render() {
    const { loggedIn, handleLogout } = this.props;

    return (
      <Nav>
        <NavUl>
          {
            loggedIn ?
              <div>
                <li><NavLink to="/home">home</NavLink></li>
                <li><NavLink to="/addClothing">add piece</NavLink></li>
                <li><NavLink to="/closet">closet</NavLink></li>
                <li><NavLink to="/" onClick={handleLogout}>logout</NavLink></li>
              </div>
              :
              <div>
                <li><NavLink id="login" onClick={this.onLoginClick}>login</NavLink></li>
                <li><NavLink id="signup" onClick={this.onSignupClick}>signup</NavLink></li>
                {
                  this.state.loginClicked && <Login />
                }
                {
                  this.state.signupClicked && <Signup />
                }
              </div>
          }
        </NavUl>
      </Nav>
    )
  }
}

