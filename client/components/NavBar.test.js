import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import NavBar from './NavBar';
import { Login, Signup } from './Auth';

describe('<NavBar />', () => {
  let root;
  beforeEach('render root component', () => {
    root = shallow(<NavBar loggedIn={false} />);
  });

  it('renders "login" and "signup" tabs when user is not logged in', () => {
    expect(root.find('li')).to.have.length(2);
  });

  it('renders <Login /> component when "login" is clicked', () => {
    //const onLoginClick = sinon.spy();
    root.find('#login').simulate('click');

    expect(root.contains(<Login />)).to.equal(true);
  });

  it('renders <Signup /> component when "signup" is clicked', () => {
    root.find('#signup').simulate('click');

    expect(root.contains(<Signup />)).to.equal(true);
  })

  it('renders only login or signup, not both, when either is clicked', () => {
    root.find('#login').simulate('click');
    root.find('#signup').simulate('click');

    expect(root.contains(<Signup />)).to.equal(true);
    expect(root.contains(<Login />)).to.equal(false);

    root.find('#login').simulate('click');

    expect(root.contains(<Signup />)).to.equal(false);
    expect(root.contains(<Login />)).to.equal(true);
  });

  describe('when logged in', () => {
    beforeEach(() => {
      root = shallow(<NavBar loggedIn={true} />);
    });

    it('renders "home", "add piece", "closet", "logout" tabs when logged in', () => {
      expect(root.find('li')).to.have.length(4);
    });

  });

});

