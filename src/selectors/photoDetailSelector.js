export const getPhotos = state => {
  return state.photos;
};

export const getPhoto = (state, imageUrl) => {
  return state.photos.find(photo => {
    return photo.imageUrl === imageUrl;
  });
};
