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


// export class Home extends Component {
//   static propTypes = {
//     photos: PropTypes.array,
//   }

//   // componentDidMount() {}

//   // componentDidUpdate() {}

//   render() {
//     return (
//       <div className="Home" style={styles}>
//         <Header className="Home-header">
//           <h1 className="App-title"> This is Photomaton </h1>
//         </Header>
//         <div>
//           <form>
//             <input type="text" placeholder="Place your photo url here" />
//             <button>Submit</button>
//           </form>
//         </div>
//         <Photos className="photoAlbum" />
//       </div>
//     );
//   }
// }
