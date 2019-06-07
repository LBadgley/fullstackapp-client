import React from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';

function Photos({ photos }) {
  const photosArray = photos.map((photo, i) => (
    <Photo key={i} photo={photo} />
  ));

  return (
    <ul>
      {photosArray}
    </ul>
  );
}
Photos.propTypes = {
  photos: PropTypes.array
};

export default Photos;
