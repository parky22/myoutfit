import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon'; // for spy calls?

import UserHome from './UserHome';
import { Button } from './style';

describe('<UserHome />', () => {
  it('renders two <Button /> components', () => {
    const wrapper = shallow(<UserHome />);
    expect(wrapper.find(Button)).to.have.length(2);
  });
});
