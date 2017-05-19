import React from 'react';
import { connect } from 'react-redux';
import { Outfit  } from './Outfit';

/**
 * UserHome will show:
 * 1. Outfit of the day
 * 2. Closet = All Clothings
 * 3. One Piece = Single Clothing
 * 4. Add Clothing = Link to separate form
 */

export const UserHome = props => {

  const { user } = props;

  return (
    <div>
      <Outfit />
    </div>
  );
};

const mapState = ({ user }) => ({ user });

export default connect(mapState)(UserHome);
