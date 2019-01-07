import React from 'react';
import { connect } from 'react-redux';
import { getFormattedTime, getStatus } from './reducers/reducer';
import PropTypes from 'prop-types';
import { start, stop, tick, reset } from './actions';

class Timer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
    return (
      <div>
      <p>
      { this.props.time } ({ this.props.status })
    </p>
    <button
      disabled={this.props.status === 'Running'}
      onClick={() => this.props.dispatch(reset)}>
      Reset
    </button>
    <button
      disabled={this.props.status === 'Running'}
      onClick={() => this.props.dispatch(start)}>
      Start
    </button>
    <button
      disabled={this.props.status === 'Stopped'}
      onClick={() => this.props.dispatch(stop)}>
      Stop
    </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    time: getFormattedTime(state),
    status: getStatus(state)
  }
}

Timer.propTypes = {
  status: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired
}


export default connect(mapStateToProps)(Timer);
