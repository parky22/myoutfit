import React from 'react';
import { connect } from 'react-redux';
import Outfit from './Outfit';


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
