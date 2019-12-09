import * as React from 'react';
import * as PropTypes from 'prop-types';

import {ShowMoreButton} from './../../components/parts/show-more-button/show-more-button.jsx';

const withShowMoreButton = (Component) => {
  class WithShowMoreButton extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        page: 1,
        displayCount: 0
      };
    }

    handlePageIncrement() {
      this.setState((prevState) => ({
        page: ++prevState.page
      }));
    }

    handlePageReset() {
      this.setState({
        page: 1
      });
    }

    render() {
      return (
        <Component
          displayCount={this.state.displayCount}
          showMoreButton={(
            <ShowMoreButton onShowMore={this.handlePageIncrement} />
          )}
          onPageReset={this.handlePageReset}
        />
      );
    }

    getDerivedStateFromProps(props) {
      this.setState({
        displayCount: props.displayCount
      });
    }
  }

  WithShowMoreButton.propTypes = {
    displayCount: PropTypes.number,
    page: PropTypes.number,
    step: PropTypes.number
  };

  WithShowMoreButton.defaultProps = {
    displayCount: 0,
    page: 1,
    step: 0
  };

  return WithShowMoreButton;
};

export default withShowMoreButton;
