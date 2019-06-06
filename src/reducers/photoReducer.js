import { ADD_PHOTO, REMOVE_PHOTO } from '../actions/photoAction';

const initialState = {};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_PHOTO:
      return [...state, action.payload];
    case REMOVE_PHOTO:
      return [...state, state.map(photo => {
        return (photo !== action.payload);
      })];
    default:
      return state;
  }
}
