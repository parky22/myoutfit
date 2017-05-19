import React from 'react';
import { connect } from 'react-redux';
import { addClothing } from '../reducer/clothing'
import { Button, Input } from './style/mainStyle';
import { SmallHeader } from './style/headerStyle';

const AddClothingForm = props => {
  const { handleChange, handleSubmit } = props;
  const { name, type, color, image, tags } = props.state;

  return (
    <div>
      <SmallHeader> add a piece </SmallHeader>
      <form>
        <row>
          <label htmlFor="name">clothing name</label>
          <Input
            name="name"
            type="text"
            value={name}
            onChange={handleChange} />
        </row>
        <row>
          <label htmlFor="type">type of clothing</label>
          <select
            name="type"
            value={type}
            onChange={handleChange}>
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
            value={color}
            onChange={handleChange} />
        </row>
        <row>
          <label htmlFor="image">image</label>
          <Input
            name="image"
            type="text"
            value={image}
            onChange={handleChange} />
        </row>
        <row>
          <label htmlFor="tags">tags</label>
          <Input
            name="tags"
            type="text"
            value={tags}
            onChange={handleChange} />
        </row>
        <row>
          <Button type="submit" onSubmit={handleSubmit}>
            submit
            </Button>
        </row>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  handleSubmit: dispatch(addClothing)
})

export default connect(null, mapDispatchToProps)(class extends React.Component {
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
    this.props.handleSubmit(this.state);
    this.setState({
      name: 'afterSubmit',
      type: 'shirt',
      color: '',
      image: '',
      tags: ''
    })
  }

  render() {
    return (
      <AddClothingForm
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        state={this.state}
      />
    );
  }
})

