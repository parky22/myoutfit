import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Clothing from './Clothing';
import Closet from './Closet';

const dummyPants = {
  id: 1,
  clothingType: 'pants',
  color: ['green', 'multi'],
  image: 'http://cdn.shopify.com/s/files/1/0286/5680/products/lunapants.png?v=1453829472',
  tags: ['cute', 'floral', 'spring', 'casual']
}

const dummyShirt = {
    id: 2,
    clothingType: 'shirt',
    color: ['purple'],
    image: 'http://images.shirts.com/products/16493/14-14-43785/batman-neon-purple-t-shirt-back.jpg',
    tags: ['casual', 'light']
  };
/**
 * UserHome will show:
 * 1. Outfit of the day
 * 2. Closet = All Clothings
 * 3. One Piece = Single Clothing
 * 4. Add Clothing = Link to separate form
 */

const UserHome = props => {

  const { user } = props;

  return (
    <div>
      <h3>Welcome, { user.email }</h3>
      <h2> 1. Outfit of the day will show here </h2>
      <h2> 2. Closet will show all pieces </h2>
      <Closet allClothings={[dummyPants, dummyShirt]} />
    </div>
  );
}

const mapState = ({ user }) => ({ user });

export default connect(mapState)(UserHome);
