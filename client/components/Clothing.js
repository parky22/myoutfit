import React from 'react';
import { connect } from 'react-redux';
import { Description, Img, PieceLabel, Tags } from './style/clothingStyle';

export const Clothing = props => {

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

const mapStateToProps = state => ({
  piece: state.clothings.selectedClothing
});

export default connect(mapStateToProps)(Clothing);

