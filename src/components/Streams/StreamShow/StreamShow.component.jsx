import React from 'react';
import {connect} from 'react-redux';
import {getStream} from '../../../actions'

import LoaderModal from '../../LoaderModal/LoaderModal.component'

class StreamShow extends React.Component {
  componentDidMount() {
    this.props.getStream(this.props.match.params);
  }
  

  render() {
    if (!this.props.stream) {
      return <LoaderModal/>
    }
    return (
      <div>
        <h1>{this.props.stream.title}</h1>
        <h5>{this.props.stream.description}</h5>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  return {stream: state.streams[ownProps.match.params.id]}
};

export default connect(mapStateToProps,{getStream})(StreamShow);
