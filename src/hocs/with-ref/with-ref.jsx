import React from 'react';

const withRef = (Component) => (
  React.forwardRef((props, ref) => {
    return <Component
      {...props}
      forwardedRef={ref}
    />;
  }));

export default withRef;
