import { connect } from 'react-redux';
import PhotoDetails from '../components/photos/PhotoDetails';
import { getPhoto } from '../selectors/photoDetailSelector';

// const mapStateToProps = (state, props) => ({
//   photo: getPhoto(state, props.match.params.imageUrl)
// });

const mapDispatchToProps = dispatch => ({
  onSubmit(imageUrl, caption) {
    dispatch(createPost(imageUrl, caption));
  }
});

export default connect(
  mapStateToProps,
  null
)(PhotoDetails);
