import React from 'react';
import {connect} from 'react-redux';
import {updateStream, getStream} from '../../../actions';
import StreamForm from '../StreamForm/StreamForm.component';

class StreamShow extends React.Component {
  componentDidMount() {
    console.log(this.props);
    this.props.getStream(this.props.match.params);
  };
  
  onSubmit = (formValues) => {
    this.props.updateStream({
      description: formValues.description,
      title: formValues.title,
    }, this.props.stream.id);
  }

  render() {
    return (!this.props.stream ? (
      <div>Loading...</div>
    ) : (
      <div><StreamForm initialValues={{
        title: this.props.stream.title,
        description: this.props.stream.description
      }} onSubmit={this.onSubmit}/></div>
    ))
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, {updateStream, getStream})(StreamShow);
