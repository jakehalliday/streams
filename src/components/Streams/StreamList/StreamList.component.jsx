import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getStreams } from '../../../actions';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.getStreams();
  }

  renderAdmin(stream) {
    if (this.props.currentUserId === stream.userId) {
      return (
        <div className='right floated content'>
          <Link to={`/streams/edit/${stream.id}`} className='ui button primary'>
            Edit
          </Link>
          <Link
            to={`/streams/delete/${stream.id}`}
            className='ui button negative'>
            Delete
          </Link>
        </div>
      );
    }
  }

  renderStreams(props) {
    return props.streams.map(stream => {
      return (
        <div className='item' key={stream.id}>
          {this.renderAdmin(stream)}
          <i className='large middle aligned icon camera'></i>
          <div className='content'>
            <Link to={`/streams/${stream.id}`} className='header'> {stream.title}</Link>

            <div className='description'>{stream.description}</div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className='ui celled list'>{this.renderStreams(this.props)}</div>
        <div className='content'>
          <div style={{ textAlign: 'right' }}>
            {!this.props.isSignedIn ? null : (
              <Link to='/streams/new' className='ui button positive'>
                Create Stream
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { getStreams })(StreamList);
