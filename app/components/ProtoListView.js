import React, { Component, PropTypes } from 'react';
import _ from 'lodash';

export default class ProtoListView extends Component {
  static propTypes = {
    removeProtoFile: PropTypes.func.isRequired,
    protoFiles: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.onRemove = this.onRemove.bind(this);
  }

  onRemove(event) {
    this.props.removeProtoFile(event.target.dataset.filename);
  }

  render() {
    return (
      <div>
        {
          _.keys(this.props.protoFiles).map((filename) => {
            return (
              <div key={filename}>
                { filename }
                <button data-filename={filename} onClick={this.onRemove}>Remove</button>
              </div>
            );
          })
        }
      </div>
    );
  }
}
