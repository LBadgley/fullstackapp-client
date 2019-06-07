import { connect } from 'react-redux';
import { getPhotos } from '../selectors/photoDetailSelector';
import HomeDisplay from '../components/HomeDisplay';
import { addPhoto } from '../actions/photoAction';

const mapStateToProps = state => ({
  photos: getPhotos(state)
});

const mapDispatchToProps = dispatch => ({
  onSubmit(imageUrl, caption) {
    dispatch(addPhoto(imageUrl, caption));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeDisplay);
