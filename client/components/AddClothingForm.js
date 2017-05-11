import React from 'react';

const AddClothingForm = props => {

  return (
    <div className="row">
      <h1> Add Clothing Form </h1>
      <form className="col s12">
        <div className="row">
          <div className="input-field col s12">
            <input placeholder="Clothing name" type="text" className="validate" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddClothingForm;
