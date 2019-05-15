import React, { PureComponent } from 'react';
import figlet from 'figlet';

export default class TextFormatter extends PureComponent {
  state = {
    text: '',
    color: 'blue',
    font: 'doh'
  };

  formatText = () => {
    const { text, font } = this.state;
    figlet.text(text, {
      font: font
    }, (err, result) => {
      this.setState({ formattedText: result });
    });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value }, () => {
      this.formatText();
    });
  }

  render() {
    const { text, formattedText, color, font } = this.state;

    return (
      <>
      <input name="text" value={text} onChange={this.handleChange} />
      <input name="color" type="color" value={color} onChange={this.handleChange} />
      <pre style={{ color: this.state.color }}>{formattedText}</pre>
      </>
    );
  }
}
