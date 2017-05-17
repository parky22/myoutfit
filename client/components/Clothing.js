import React from 'react';
import { Description, Img, PieceLabel, Tags } from './style/clothingStyle';

export default props => {

  return (
    <div>
      <PieceLabel>{props.piece.clothingType}</PieceLabel>
      <Img src={props.piece.image} />
      <Description>
        <Tags> {props.piece.tags.join(', ')} </Tags>
      </Description>
    </div>
  );
};

