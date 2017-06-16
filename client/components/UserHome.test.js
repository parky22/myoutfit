import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { UserHome } from './UserHome';
import Outfit from './Outfit';

const dummyUser = {
  email: 'test@email.com'
}

describe('<UserHome />', () => {
  const wrapper = shallow(<UserHome user={dummyUser} />);

  it('renders <Outfit /> component', () => {
    expect(wrapper.contains(<Outfit />)).to.equal(true);
  });

});
