export const ADD_PHOTO = 'ADD_PHOTO';
export const addPhoto = (imageUrl, caption) => ({
  type: ADD_PHOTO,
  payload: {
    imageUrl,
    caption
  }
});
export const REMOVE_PHOTO = 'REMOVE_PHOTO';
export const removePhoto = (imageUrl) => ({
  type: REMOVE_PHOTO,
  payload: {
    imageUrl
  }
});


