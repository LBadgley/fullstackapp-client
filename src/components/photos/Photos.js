import React from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';

function Photos({ photos }) {
  const photosArray = photos.map(photo => {
    return (
      <li key={photo._id}>
        <Photo photo={photo} />
      </li>
    );
  });

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
