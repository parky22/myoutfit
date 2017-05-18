import React from 'react';
import { connect } from 'react-redux';
import { Button, Input } from './style/mainStyle';
import { SmallHeader } from './style/headerStyle';

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

  handleChange = e => {
    const target = e.target
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log('Gotta handle submit better than this');
  }

  render() {
    return (
      <div>
        <SmallHeader> add a piece </SmallHeader>
        <form>
          <row>
            <label htmlFor="name">clothing name</label>
            <Input
              name="name"
              type="text"
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
            <label htmlFor="color">color(s)</label>
            <Input
              name="color"
              type="text"
              value={this.state.color}
              onChange={this.handleChange} />
          </row>
          <row>
            <label htmlFor="image">image</label>
            <Input
              name="image"
              type="text"
              value={this.state.image}
              onChange={this.handleChange} />
          </row>
          <row>
            <label htmlFor="tags">tags</label>
            <Input
              name="tags"
              type="text"
              value={this.state.tags}
              onChange={this.handleChange} />
          </row>
          <row>
            <Button type="submit" onSubmit={this.handleSubmit}>
              submit
            </Button>
          </row>
        </form>
      </div>
    );
  }
}

export default connect()(AddClothingForm);
