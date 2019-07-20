import React, { PureComponent } from 'react';
import figlet from 'figlet';

export default class TextFormatter extends PureComponent {
  state = {
    text: '',
    formattedText: '',
    color: '#000000',
    font: 'Doh'
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
    const fontsArray = ['Doh', 'Roman', 'Isometric3', 'Dr Pepper', 'Dot Matrix'];
    const fontOptions = fontsArray.map(font => {
      return <option key={font} value={font}>{font}</option>;
    });

    return (
      <>
      <select name="font" value={font} onChange={this.handleChange}>{fontOptions}</select>
      <input name="text" value={text} onChange={this.handleChange} />
      <input name="color" type="color" value={color} onChange={this.handleChange} />
      <pre style={{ color }}>{formattedText}</pre>
      </>
    );
  }
}
