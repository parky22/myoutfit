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
    // this.handleChange = this.handleChange.bind(this);
  }

  handleChange=(e) => {
    const target = e.target
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('Gotta handle submit better than this');
  }

  render() {
    return (
      <div>
        <h3> Add Clothing Form </h3>
        <form>
          <div>
            <div>
              <input
                name="name"
                type="text"
                className="validate"
                value={this.state.name}
                onChange={this.handleChange} />
              <label>Clothing Name</label>
            </div>
            <div>
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
            <div>
              <input type="text" className="validate" />
              <label>Colors</label>
            </div>
            <div>
              <input type="text" className="validate" />
              <label>Image</label>
            </div>
            <div>
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
