import React from 'react';
import PropTypes from 'prop-types';
import Color from './Color';

function Colors({ colors }) {
  const colorList = colors.map(color => {
    return (<li key={color.name} style={{ color: color, fontSize: '2em' }}>
      <Color name={color.name} hex={color.hex} rgb={color.rgb} />
    </li>
    );
  });

  return (
    <ul>
      { colorList }
    </ul>
  );
}

Colors.propTypes = {
  colors: PropTypes.array.isRequired
};

export default Colors;
