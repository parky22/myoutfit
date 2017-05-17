import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon'; // for spy calls?

import { UserHome } from './UserHome';
import { Outfit } from './Outfit';
import { Button } from './style/mainStyle';

const dummyUser = {
  email: 'test@email.com'
}

describe('<UserHome />', () => {
  it('renders <Outfit /> component', () => {
    const wrapper = shallow(<UserHome user={dummyUser} />);
    expect(wrapper.contains(<Outfit />)).to.equal(true);
  });
});
