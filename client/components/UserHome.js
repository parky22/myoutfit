import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Clothing from './Clothing';

const dummyPants = {
  clothingType: 'pants',
  color: ['green', 'multi'],
  image: 'http://cdn.shopify.com/s/files/1/0286/5680/products/lunapants.png?v=1453829472',
  tags: ['cute', 'floral', 'spring', 'casual']
}

const UserHome = props => {

  const { user } = props;

  return (
    <div>
      <h3>Welcome, { user.email }</h3>
      <h2><Link to="/home/addClothing"> Add Clothing </Link></h2>
      <Clothing clothing={dummyPants}/>
    </div>
  );
}

const mapState = ({ user }) => ({ user });

export default connect(mapState)(UserHome);
