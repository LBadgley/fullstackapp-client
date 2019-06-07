import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Photo({ photo }) {
  console.log(photo);
  const { imageUrl, caption } = photo;
  return (
    <li>
      <Link to={`/${photo.imageUrl}`}>
        <img src={imageUrl}></img>
      </Link>
      <p>{caption}</p>
    </li>
  );
}

Photo.propTypes = {
  photo: PropTypes.object.isRequired
};

export default Photo;
