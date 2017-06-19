import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import NavBar from './NavBar';
import { Login, Signup } from './Auth';
import { Nav, NavUl, NavLink } from './style/navStyle';

describe('<NavBar />', () => {
  let root;
  beforeEach('render root component', () => {
    root = shallow(<NavBar loggedIn={false} />);
  });

  it('renders "login" and "signup" tabs when user is not logged in', () => {
    expect(root.find(NavLink)).to.have.length(2);
    expect(root.find('#login').text()).equal('login');
    expect(root.find('#signup').text()).equal('signup');
  });

  it('renders <Login /> component when "login" is clicked', () => {
    //const onLoginClick = sinon.spy();
    root.find('#login').simulate('click');
    expect(root.contains(<Login />)).to.equal(true);
  });

  describe('when logged in', () => {
    beforeEach(() => {
      root = shallow(<NavBar loggedIn={true} />);
    });

    it('renders "home", "add piece", "closet", "logout" tabs when logged in', () => {
      expect(root.find(NavLink)).to.have.length(4);
    });

  });

});

