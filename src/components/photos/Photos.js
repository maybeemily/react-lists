import React from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';

function Photos({ photoArray }) {
  const photoList = photoArray.map(photo => {
    return (
      <li key={photo}>
        <Photo photo={photo}/>
      </li>
    );
  });

  return (
    <ul>
      {photoList}
    </ul>
  );
}

Photos.propTypes = {
  photoArray: PropTypes.array.isRequired
};

export default Photos;
