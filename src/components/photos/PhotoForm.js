import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class CommentForm extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  state = {
    imageUrl: '',
    caption: ''
  }

  handleSubmit = event => {
    event.preventDefault();

    const { photoUrl } = this.state;
    this.props.onSubmit(photoUrl);
    this.ListeningStateChangedEvent({ imageUrl: '', caption: '' });
  }
  updatePhoto = ({ target }) => {
    this.setState({ photoUrl: target.value });
  }

  render() {
    const { imageUrl, caption } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="imageUrl" value={imageUrl} onChange={this.handleChange} />
        <input name="caption" value={caption} onChange={this.handleChange} />
        <button>Submit!</button>
      </form>
    );
  }
}
