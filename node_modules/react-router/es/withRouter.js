var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import Route from './Route';

/**
 * A public higher-order component to access the imperative API
 */
var withRouter = function withRouter(Component) {
  var C = function C(props) {
    return React.createElement(Route, { render: function render(routeComponentProps) {
        return React.createElement(Component, _extends({}, props, routeComponentProps));
      } });
  };

  C.displayName = 'withRouter(' + (Component.displayName || Component.name) + ')';

  return C;
};

export default withRouter;