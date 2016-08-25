import React, { Component, PropTypes } from 'react';
import Dropzone from 'react-dropzone';
import { fetchLocal } from '../utils/utils';

export default class ProtoDropArea extends Component {
  static propTypes = {
    onAdd: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(files) {
    files.forEach((file) => {
      fetchLocal(file.path).then(response => {
        response.body.getReader().read().then(({ value, done }) => {
          if (done) {
            // TODO error handling.
            console.log("Error: Stream was already read.");
          } else {
            this.props.onAdd(file.name, new TextDecoder().decode(value, { stream: true }));
          }
        });
      });
    });
  }

  render() {
    return (
      <Dropzone onDrop={this.onDrop}>
        <div>Drag and Drop .proto files here.</div>
      </Dropzone>
    );
  }
}
