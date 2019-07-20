import React from 'react';
import PropTypes from 'prop-types';

function Color({ name, hex, rgb }) {
  return (
    <dl>
      <dt>Name</dt>
      <dd><div style={{ display: 'inline-block', backgroundColor: hex, width: '20px', height: '20px' }}></div>{name}</dd>

      <dt>Hex</dt>
      <dd>{hex}</dd>

      <dt>RBG</dt>
      <dd>{rgb}</dd>
    </dl>
  );
}

Color.propTypes = {
  name: PropTypes.string.isRequired,
  hex: PropTypes.string.isRequired,
  rgb: PropTypes.string.isRequired
};

export default Color;
