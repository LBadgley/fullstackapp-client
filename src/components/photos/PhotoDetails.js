import React from 'react';
import PropTypes from 'prop-types';
import AllComments from '../../containers/AllComments';
import CreateComment from '../../containers/CreateComment'; 

function PhotoDetails({ photo }) {
  return (
    <section>
      <div>
        <img src={photo.imageUrl}/>
        <h2>{photo.caption}</h2>
      </div>
      <div>
        <CreateComment photo={photo.imageUrl} />
      </div>
      <div>
        <AllComments photo={photo.imageUrl} />
      </div>
    </section>
  );
}

PhotoDetails.propTypes = {
  photo: PropTypes.shape({
    caption: PropTypes.string,
    imageUrl: PropTypes.string.isRequired
  })
};

export default PhotoDetails;
