import { connect } from 'react-redux';
import PhotoDetails from '../components/photos/PhotoDetails';
import { getPhoto } from '../selectors/photoDetailSelector';

const mapStateToProps = (state, props) => ({
  photo: getPhoto(state, props.match.params.imageUrl)
});

export default connect(
  mapStateToProps,
  null
)(PhotoDetails);
