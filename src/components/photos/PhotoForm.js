import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class PhotoForm extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  state = {
    photos: [],
    imageUrl: '',
    caption: ''
  }

  handleSubmit = event => {
    event.preventDefault();

    const { photoUrl } = this.state;
    this.props.onSubmit(photoUrl);
    this.setState({ imageUrl: '', caption: '' });
  }
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { imageUrl, caption } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="imageUrl" value={imageUrl} onChange={this.handleChange} placeholder="Paste your URL here"/>
        <input name="caption" value={caption} onChange={this.handleChange} placeholder="Caption your photo"/>
        <button>Submit!</button>
      </form>
    );
  }
}
