import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Clothing from './Clothing';

const UserHome = props => {

  const { user } = props;

  return (
    <div>
      <h3>Welcome, { user.email }</h3>
      <h2><Link to="/home/addClothing"> Add Clothing </Link></h2>
      <Clothing />
    </div>
  );
}

const mapState = ({ user }) => ({ user });

export default connect(mapState)(UserHome);
