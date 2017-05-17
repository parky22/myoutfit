import React from 'react';
import { connect } from 'react-redux';
import { Button, Input } from './style/mainStyle';

class AddClothingForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      type: 'shirt',
      color: '',
      image: '',
      tags: ''
    }
  }

  handleChange=(e)=> {
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
        <h3> add a piece </h3>
        <form>
          <div>
            <row>
              <label htmlFor="name">clothing name</label>
              <Input
                name="name"
                type="text"
                className="validate"
                value={this.state.name}
                onChange={this.handleChange} />
            </row>
            <row>
              <label htmlFor="type">type of clothing</label>
              <select
              name="type"
              value={this.state.type}
              onChange={this.handleChange}>
                <option value="shirt">shirt</option>
                <option value="pants">pants</option>
                <option value="other">other</option>
              </select>
            </row>
            <row>
              <label htmlFor="colors">colors</label>
              <Input name="colors" type="text" className="validate" />
            </row>
            <row>
              <label>image</label>
              <Input type="text" className="validate" />
            </row>
            <row>
              <label>tags</label>
              <Input type="text" className="validate" />
            </row>
            <Button type="submit" onSubmit={this.handleSubmit}>
              submit
          </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect()(AddClothingForm);
