import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { UserHome } from './UserHome';
import { Outfit } from './Outfit';
import { Button } from './style/mainStyle';

const dummyUser = {
  email: 'test@email.com'
}

describe('<UserHome />', () => {
  const wrapper = shallow(<UserHome user={dummyUser} />);

  it('renders <Outfit /> component', () => {
    expect(wrapper.contains(<Outfit />)).to.equal(true);
  });

  it('renders a greeting for user', () => {
    expect(wrapper.contains(<h3>Welcome, {dummyUser.email}</h3>)).to.equal(true);
  });
});
