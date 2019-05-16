import React from 'react';
import PropTypes from 'prop-types';

const decimalHex = hex => {
  return Number.parseInt(`0x${hex}`, 16);
};

const rgbFromHex = hex => {
  return {
    red: decimalHex(hex.slice(1, 3)),
    green: decimalHex(hex.slice(3, 5)),
    blue: decimalHex(hex.slice(5, 7))
  };
};

function Color({ name, hex }) {
  const rgb = rgbFromHex(hex);
  return (
    <dl>
      <dt>Name</dt>
      <dd>{name} <div style={{ width: '20px', height: '20px', backgroundColor: hex }}></div></dd>

      <dt>Hex</dt>
      <dd>{hex}</dd>

      <dt>RGB</dt>
      <dd><p>({rgb.red},{rgb.green},{rgb.blue})</p></dd>
    </dl>
  );
}

Color.propTypes = {
  name: PropTypes.string.isRequired,
  hex: PropTypes.string.isRequired
};

export default Color;
