/*/import { connect } from 'react-redux';
import PhotoDetails from '../components/photos/PhotoDetails';
import addComment from '../actions/commentAction';
import { getComments } from '../selectors/commentSelector';

const mapStateToProps = (state, { postId }) => ({
  comments: getComments(state, postId)
});

const mapDispatchToProps = (dispatch, { postId }) => ({
  onSubmit(commentId) {
    dispatch(addComment(commentId));
  }
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoDetails); /*/
