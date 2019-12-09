import * as React from 'react';

const withPlayerScreen = (Component) => {
  class WithPlayerScreen extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlayerShow: false
      };

      this.handlePlayerVisibility = this.handlePlayerVisibility.bind(this);
    }

    handlePlayerVisibility() {
      this.setState((prevState) => ({
        isPlayerShown: !prevState.isPlayerShown
      }));
    }

    render() {
      return (
        <Component
          {...this.props}
          isPlayerShown={this.state.isPlayerShown}
          onShowPlayer={this.handlePlayerVisibility}
          onClosePlayer={this.handlePlayerVisibility}
        />
      );
    }
  }

  return WithPlayerScreen;
};

export default withPlayerScreen;
