import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Photo({ photo }) {
  const { imageUrl, caption } = photo;
  return (
    <>
      <Link to={`/${photo}`}>
        <img src={imageUrl}></img>
      </Link>
      <p>{caption}</p>
    </>
  );
}

Photo.propTypes = {
  photo: PropTypes.string.isRequired
};

export default Photo;
