import React from 'react';
import Clothing from './Clothing';

const Closet = props => {
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

export default Closet;
