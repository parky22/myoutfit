import React from 'react';

export default props => {

  return (
    <div>
      <h3>{props.piece.clothingType}</h3>
      <img src={props.piece.image} />
      <h3> {props.piece.tags.join(', ')} </h3>
    </div>
  );
};

