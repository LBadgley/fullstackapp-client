import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getComments } from '../selectors/commentSelector';
import Comments from '../components/comments/Comments';

const mapStateToProps = (state, props) => ({
  comments: getComments(state, props.photo)
});

export default withRouter(connect(
  mapStateToProps,
  null
)(Comments));
