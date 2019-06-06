import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class CommentForm extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  state = {
    text: ''
  }

  handleSubmit = event => {
    event.preventDefault();

    const { text } = this.state;
    this.props.onSubmit(text);
    this.setState({ text: '' });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { text } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <textArea name="text" value={text} onChange={this.handleChange}>{text}</textArea>
        <button>Submit</button>
      </form>
    );
  }
}
