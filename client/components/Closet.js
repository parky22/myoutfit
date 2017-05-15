import React from 'react';
import Clothing from './Clothing';

export default props => {

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

