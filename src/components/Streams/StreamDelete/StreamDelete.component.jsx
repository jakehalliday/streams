import React from 'react';
import { connect } from 'react-redux';

import history from '../../../history';
import Modal from '../../Modal/Modal.component';
import { getStream, deleteStream } from '../../../actions/index';

class StreamDelete extends React.Component {

  componentDidMount() {
    this.props.getStream(this.props.match.params);
  }
  

  onClick = () => {
    this.props.deleteStream(this.props.match.params.id);
  };

  onDismiss = () => {
    history.push('/');
  };
  
  render() {
    console.log(this.props.stream);
    const actions = (
      <React.Fragment>
        <button className='ui negative button' onClick={this.onClick}>
          Delete
        </button>
        <button className='ui button' onClick={this.onDismiss}>
          Cancel
        </button>
      </React.Fragment>
    );
    return (
      <div>
        <Modal
          title='Delete Stream'
          content={this.props.stream ? `Are you sure you want to delete the stream with title: ${this.props.stream.title}` : 'Are you sure you want to delete this stream?'}
          actions={actions}
          onDismiss={this.onDismiss}
        />
      </div>
    );
  }
}

const mapStateToProps = (state,ownProps) => {
  return {stream: state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps, { getStream, deleteStream })(StreamDelete);
