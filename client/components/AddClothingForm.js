import React from 'react';
import { connect } from 'react-redux';

// not sure why but this isn't showing up.
const AddClothingForm = props => {

  return (
    <div>
      <h1> IN ADD CLOTHING FORM </h1>
    </div>
  );
};

export default connect()(AddClothingForm);


//  <div className="row">
//       <h1> Add Clothing Form </h1>
//       <form className="col s12">
//         <div className="row">
//           <div className="input-field col s12">
//             <input placeholder="Clothing name" type="text" className="validate" />
//           </div>
//         </div>
//       </form>
//     </div>