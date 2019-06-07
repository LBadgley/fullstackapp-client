export const getComments = state => {
  return state.comments;
};

export const getComment = (state, imageUrl) => {
  return state.comments.find(comment => {
    return comment.imageUrl === imageUrl;
  });
};
