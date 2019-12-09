import * as React from 'react';
import * as PropTypes from 'prop-types';

const withTimeline = (Component) => {
  class WithTimeLine extends React.PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = this.props.videoRef;

      this.state = {
        secondsPlayed: 0,
        duration: 0
      };

      this._setDuration = this._setDuration.bind(this);
      this._handleTimeUpdate = this._handleTimeUpdate.bind(this);
    }

    componentDidMount() {
      const video = this._videoRef.current;

      video.ontimeupdate = (e) => {
        this._handleTimeUpdate(e.currentTarget.currentTime);
      };

      video.onloadedmetadata = (e) => {
        this._setDuration(e.currentTarget.duration);
      };
    }

    _handleTimeUpdate(seconds) {
      this.setState({
        secondsPlayed: seconds
      });
    }

    _setDuration(seconds) {
      this.setState({
        duration: seconds
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          secondsPlayed={this.state.secondsPlayed}
          duration={this.state.duration}
        />
      );
    }
  }

  WithTimeLine.propTypes = {
    videoRef: PropTypes.shape({
      current: PropTypes.instanceOf(Element)
    })
  };

  return WithTimeLine;
};

export default withTimeline;
