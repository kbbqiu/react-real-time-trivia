webpackHotUpdate(0,{

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _Player = __webpack_require__(112);

var _Player2 = _interopRequireDefault(_Player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CurrentPlayers = function (_Component) {
  _inherits(CurrentPlayers, _Component);

  function CurrentPlayers() {
    _classCallCheck(this, CurrentPlayers);

    return _possibleConstructorReturn(this, (CurrentPlayers.__proto__ || Object.getPrototypeOf(CurrentPlayers)).apply(this, arguments));
  }

  _createClass(CurrentPlayers, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var currentPlayers = this.props.players.map(function (player, i) {
        return _react2.default.createElement(_Player2.default, { player: player.username, score: player.score, key: i });
      });

      return _react2.default.createElement(
        'div',
        { style: styles.container, className: 'currentPlayers' },
        _react2.default.createElement('input', { type: 'text', value: this.props.value, onChange: this.props.change }),
        _react2.default.createElement(
          'button',
          { onClick: function onClick() {
              _this2.props.newUser(_this2.props.value);
            } },
          'Create New User'
        ),
        currentPlayers
      );
    }
  }]);

  return CurrentPlayers;
}(_react.Component);

;

var styles = {
  container: {
    color: 'blue',
    width: '200px',
    height: '800px',
    backgroundColor: 'green',
    float: 'left'
  }
};

exports.default = CurrentPlayers;

/***/ })

})