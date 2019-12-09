import * as React from 'react';

const withAutoplay = (Component) => {
  class WithAutoplay extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        autoplay: false
      };

      this.handleAutoplayStatus = this.handleAutoplayStatus.bind(this);
    }

    handleAutoplayStatus(status) {
      this.setState({
        autoplay: status
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          autoplay={this.state.autoplay}
          onAutoplayStatusUpdate={this.handleAutoplayStatus}
        />
      );
    }
  }

  return WithAutoplay;
};

export default withAutoplay;
