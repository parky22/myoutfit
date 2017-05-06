import React from 'react';

const Clothing = props => {

  return (
    <div>
      <h3>{props.piece.clothingType}</h3>
      <img src={props.piece.image} />
      <h3> {props.piece.tags.join(', ')} </h3>
    </div>
  );
}

export default Clothing;
