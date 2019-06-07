export const ADD_COMMENT = 'ADD_COMMENT';
export const addComment = (text, photoUrl) => ({
  type: ADD_COMMENT,
  payload: { text, photoUrl }
});
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const removeComment = (commentId) => ({
  type: REMOVE_COMMENT, 
  payload: { commentId }
});
