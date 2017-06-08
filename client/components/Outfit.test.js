import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { Outfit } from './Outfit';
import Clothing from './Clothing';
import { SmallHeader } from './style/headerStyle';

const dummySweater = {
  id: 1,
  clothingType: 'other',
  color: ['pink'],
  image: 'http://img.sheinside.com/images/sheinside.com/201310/1381733774262442938.jpg',
  tags: ['casual', 'warm']
};

const dummyPants = {
  id: 2,
  clothingType: 'pants',
  color: ['green', 'multi'],
  image: 'http://cdn.shopify.com/s/files/1/0286/5680/products/lunapants.png?v=1453829472',
  tags: ['cute', 'floral', 'spring', 'casual']
}

const dummyOutfit = [dummySweater, dummyPants];

describe('<Outfit />', () => {
  const wrapper = shallow(<Outfit outfit={dummyOutfit} />);

  it('renders "outfit of the day" header', () => {
    expect(wrapper.contains(<SmallHeader>outfit of the day</SmallHeader>)).to.equal(true);
  });

  it('renders 2 instances of Clothing component', () => {
    expect(wrapper.find(Clothing)).to.have.length(2);
  });

  it('renders a Clothing component for a sweater', () => {
    expect(wrapper.contains(<Clothing key={dummySweater.id} piece={dummySweater} />)).to.equal(true);
  });

  it('renders a Clothing component for pants', () => {
    expect(wrapper.contains(<Clothing key={dummyPants.id} piece={dummyPants} />)).to.equal(true);
  });

});
