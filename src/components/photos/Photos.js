import React from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';

function Photos({ photos }) {
  const photosArray = () => {
    if(photos) {
      photos.map((photo) => (
        <li key={photo._id}>
          <Photo photo={photo} />
        </li>
      ));
    } else return null;
  };

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
