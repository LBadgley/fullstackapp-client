import { connect } from 'react-redux';
import { addComment } from '../actions/commentAction';
import CommentForm from '../components/comments/CommentForm';
import { withRouter } from 'react-redux-dom';

const mapDispatchToProps = (dispatch, props) => ({
  onSubmit(text) {
    dispatch(addComment(text, props.photo));
  }
});

export default withRouter(connect(
  null,
  mapDispatchToProps
))(CommentForm);
