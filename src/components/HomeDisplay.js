import React from 'react';
import styles from './Home.css';
import Photos from './photos/Photos';
import PhotoForm from './photos/PhotoForm';
import PropTypes from 'prop-types';

function HomeDisplay({ onSubmit, photos }) {
  return (
    <section style={styles}>
      <PhotoForm onSubmit={onSubmit} />
      <Photos photos={photos} />
    </section>
  );
}

HomeDisplay.propTypes = {
  photos: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default HomeDisplay;
