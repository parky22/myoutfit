import React from 'react';



const Clothing = props => {

  return (
    <div>
      <h3>{props.clothing.clothingType}</h3>
      <img src={props.clothing.image} />
      <h3> {props.clothing.tags.join(', ')} </h3>
    </div>
  );
}

export default Clothing;
