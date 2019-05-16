import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class CreateColor extends PureComponent {
  static propTypes = {
    addColor: PropTypes.func.isRequired
  };

  state = {
    name: '', //waiting for input
    color: '#000000'
  }

  //on submit, change the state to the values inputted
  handleSubmit = event => {
    event.preventDefault();
    const { name, color } = this.state;
    this.props.addColor({ name, hex: color });
  }

  //on change of color, change the state of the color

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { color, name } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="name" type="text" value={name} onChange={this.handleChange}/>
        <input name="color" type="color" value={color} onChange={this.handleChange}/>
        <button>Add Color</button>
      </form>
    );
  }
}



//import things
//proptypes - add color function
//state
//handle submit with prevent default
//handle change
//render form
