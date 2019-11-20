import * as React from 'react';
import PropTypes from 'prop-types';

const withActiveItem = (Component) => {
  class WithActiveItem extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        active: null
      };

      this._handleActiveChange = this._handleActiveChange.bind(this);
    }

    _handleActiveChange(active) {
      this.setState({active});
      if (this.props.onActiveChange) {
        this.props.onActiveChange(active);
      }
    }

    render() {
      const {active} = this.state;

      return (
        <Component
          {...this.props}
          active={active}
          onActiveChange={this._handleActiveChange}
        />
      );
    }
  }

  WithActiveItem.propTypes = {
    onActiveChange: PropTypes.func
  };

  return WithActiveItem;
};

export default withActiveItem;
