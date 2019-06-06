import { combineReducers } from 'redux';
import photos from './photoReducer';
import comments from './commentReducer';

export default combineReducers({
  photos,
  comments
});
