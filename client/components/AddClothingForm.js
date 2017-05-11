import React from 'react';
import { connect } from 'react-redux';

class AddClothingForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      type: 'Choose a type',
      color: '',
      image: '',
      tags: ''
    }
  }

  handleChange(e) {
    const target = e.target
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    
  }

  render() {
    return (
      <div className="row">
        <h3> Add Clothing Form </h3>
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input
                name="name"
                type="text"
                className="validate"
                value={this.state.name}
                onChange={this.handleChange} />
              <label>Clothing Name</label>
            </div>
            <div className="input-field col s12">
              <select
              name="type"
              value={this.state.type}
              onChange={this.handleChange}>
                <option value="shirt">Shirt</option>
                <option value="pants">Pants</option>
                <option value="other">Other</option>
              </select>
              <label>Type of Clothing</label>
            </div>
            <div className="input-field col s12">
              <input type="text" className="validate" />
              <label>Colors</label>
            </div>
            <div className="input-field col s12">
              <input type="text" className="validate" />
              <label>Image</label>
            </div>
            <div className="input-field col s12">
              <input type="text" className="validate" />
              <label>Tags</label>
            </div>
            <button type="submit" onSubmit={this.handleSubmit}>
              Submit
          </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect()(AddClothingForm);
