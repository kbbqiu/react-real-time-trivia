webpackHotUpdate(0,{

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Player = function (_Component) {
  _inherits(Player, _Component);

  function Player() {
    _classCallCheck(this, Player);

    return _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).apply(this, arguments));
  }

  _createClass(Player, [{
    key: 'render',
    value: function render() {
      // maybe add link for fb at the a tag
      return _react2.default.createElement(
        'div',
        { style: styles.userStyle, className: 'player' },
        _react2.default.createElement(
          'div',
          { style: styles.username },
          this.props.player
        ),
        _react2.default.createElement(
          'div',
          { style: styles.username },
          this.props.score
        )
      );
    }
  }]);

  return Player;
}(_react.Component);

;

var styles = {
  userStyle: {
    width: '100%',
    height: '20px',
    backgroundColor: 'white'
  },
  username: {
    width: '50%',
    display: 'inline-block'
  }
};

exports.default = Player;

/***/ })

})