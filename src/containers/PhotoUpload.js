import React, { Component } from 'react';
import { render } from 'react-dom';
export default class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = { file: '', imagePreviewUrl: '' };
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('handling upload', this.state.file);
  }

  handleImageChange(event) {
    event.preventDefault();
    
    let reader = new FileReader();
    let file = event.target.files[0];
    
    render.onloaded = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };
    
    reader.readAsDataURL(file);
  }

  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if(imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (< div className="previewText">Please Select An Image for Preview</div>);
    }
    return (
      <div className="previewComponent">
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input className="fileInput" type="submit" onClick={(event) => this.handleSubmit(event)}>Upload Image</input>
        </form>
        <div className="imgPreview">
          {$imagePreview}
        </div>
      </div>
    );
  }
}

