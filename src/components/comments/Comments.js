import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

function Comments({ comments }) {
  const commentsArray = comments.map((comment, i) => {
    return (
      <li key={i}>
        <Comment comment={comment} />
      </li>
    );
  });

  return (
    <ul>
      {commentsArray}
    </ul>
  );
}

Comments.propTypes = {
  comments: PropTypes.array.isRequired
};

export default Comments;
