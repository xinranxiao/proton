import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ProtoFilesActions from '../actions/protoFiles';
import React, { Component, PropTypes } from 'react';
import styles from '../components/Home.css';
import ProtoDropArea from '../components/ProtoDropArea';
import ProtoListView from '../components/ProtoListView';

class HomePage extends Component {
  static propTypes = {
    addProtoFile: PropTypes.func.isRequired,
    removeProtoFile: PropTypes.func.isRequired,
    loadSavedProtoFiles: PropTypes.func.isRequired,
    protoFiles: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    props.loadSavedProtoFiles();
  }

  render() {
    console.log(this.props.protoFiles);
    return (
      <div>
        <div className={styles.container}>
          <h2>Home</h2>
          <ProtoDropArea onAdd={this.props.addProtoFile} />
          <ProtoListView protoFiles={this.props.protoFiles} removeProtoFile={this.props.removeProtoFile} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    protoFiles: state.protoFiles
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ProtoFilesActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
