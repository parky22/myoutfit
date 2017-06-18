import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import NavBar from './NavBar';
import { Nav, NavUl, NavLink } from './style/navStyle';

describe('<NavBar />', () => {

  it('renders "login" and "signup" tabs when logged out', () => {
    const wrapper = mount(<NavBar loggedIn={false} />);

    expect(wrapper.contains(<NavLink onClick={this.onLoginClick}>login</NavLink>)).to.equal(true);
    expect(wrapper.contains(<NavLink onClick={this.onSignupClick}>signup</NavLink>)).to.equal(true);
    expect(wrapper.find(NavLink)).to.have.length(2);
  });

  it('renders "home", "add piece", "closet", "logout" tabs when logged in', () => {
    const wrapper = shallow(<NavBar loggedIn={true} />);

    expect(wrapper.find(NavLink)).to.have.length(4);
  });

});

