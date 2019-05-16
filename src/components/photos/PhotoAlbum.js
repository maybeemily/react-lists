import React from 'react';
import PropTypes from 'prop-types';
import Photos from './Photos';

function PhotoAlbum({ title, photos }) {
  return (
    <section>
      <h2>{title}</h2>
      <Photos photos={photos}/>
    </section>
  );
}

PhotoAlbum.propTypes = {
  title: PropTypes.string,
  photos: PropTypes.array.isRequired
};

PhotoAlbum.defaultPropts = {
  title: 'Cool Photos!'
};

export default PhotoAlbum;
