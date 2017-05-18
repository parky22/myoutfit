import React from 'react';
import { connect } from 'react-redux';
import Clothing from './Clothing';
import { SmallHeader } from './style/headerStyle';

const Closet = props => {
  return (
    <div>
      <SmallHeader>closet</SmallHeader>
      {
        props.allClothings ?
        props.allClothings.map(piece => {
          return <Clothing key={piece.id} piece={piece} />
        })
        :
        'There\'s nothing!'
      }
    </div>
  );
};

const mapStateToProps = (state) => ({
    allClothings: state.allClothings
});

export default connect(mapStateToProps)(Closet);
