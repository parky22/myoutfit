import React from 'react';
import { connect } from 'react-redux';
import Clothing from './Clothing';

const Closet = props => {
  console.log("PROPS ALL CLOTHINGS", props.allClothings);
  return (
    <div>
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
