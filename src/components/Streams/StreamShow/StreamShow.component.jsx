import React from 'react';
import { connect } from 'react-redux';
import { getStream } from '../../../actions';
import flvjs from 'flv.js';

import LoaderModal from '../../LoaderModal/LoaderModal.component';

class StreamShow extends React.Component {
  constructor() {
    super();
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    this.props.getStream(this.props.match.params);
    this.buildPlayer();
  };

  componentDidUpdate() {
    this.buildPlayer();
  };
  
  buildPlayer() {
    if (this.player || !this.props.stream) {
      return;
    }
    this.player = flvjs.createPlayer({
        type: 'flv',
        url: `http://localhost:8000/live/${this.props.stream.key}.flv`,
      });
      this.player.attachMediaElement(this.videoRef.current);
      this.player.load();
  }

  render() {
    if (!this.props.stream) {
      return <LoaderModal />;
    }
    return (
      <div>
        <video ref={this.videoRef} style={{ width: '100%' }} controls />
        <h1>{this.props.stream.title}</h1>
        <h5>{this.props.stream.description}</h5>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { getStream })(StreamShow);