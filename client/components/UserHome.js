import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Clothing from './Clothing';
import Closet from './Closet';

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
      <h1><Link to="addClothing">Add Clothing</Link></h1>
      <h1><Link to="closet">Closet</Link></h1>
    </div>
  );
}

const mapState = ({ user }) => ({ user });

export default connect(mapState)(UserHome);
