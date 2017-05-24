import React from 'react';
import { connect } from 'react-redux';
import Clothing from './Clothing';
import { SmallHeader } from './style/headerStyle';

export const Outfit = props => {
  return (
    <div>
      <SmallHeader>outfit of the day</SmallHeader>
      {
        props.outfit && props.outfit.map(clothing => (
          <Clothing key={clothing.id} piece={clothing} />
        ))
      }
    </div>
  );
};

const mapState = state => ({
  outfit: state.clothings.outfit
});

export default connect(mapState)(Outfit);
