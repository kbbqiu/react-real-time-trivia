webpackHotUpdate(0,{

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(56);

var _axios = __webpack_require__(92);

var _axios2 = _interopRequireDefault(_axios);

var _Answers = __webpack_require__(110);

var _Answers2 = _interopRequireDefault(_Answers);

var _CurrentPlayers = __webpack_require__(111);

var _CurrentPlayers2 = _interopRequireDefault(_CurrentPlayers);

var _Trivia = __webpack_require__(113);

var _Trivia2 = _interopRequireDefault(_Trivia);

var _Chatbox = __webpack_require__(218);

var _Chatbox2 = _interopRequireDefault(_Chatbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      question: "In The Sword in the Stone, what does Merlin call The Greatest Force on Earth?",
      answers: ['Love', 'React', 'SoFkingHard', 'Death'],
      answer: 'Love',
      players: [],
      textValue: ''
    };
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          question = _state.question,
          answers = _state.answers;

      var triviaQuestion = _react2.default.createElement(_Trivia2.default, { question: question });
      var triviaAnswers = _react2.default.createElement(_Answers2.default, { answers: answers, onClick: this.answerClick.bind(this) });
      var playerRoom = _react2.default.createElement(_CurrentPlayers2.default, { value: this.state.textValue, players: this.state.players, change: this.handleChange.bind(this), newUser: this.newPlayer.bind(this) });
      var chatBox = _react2.default.createElement(_Chatbox2.default, null);

      return _react2.default.createElement(
        'div',
        { style: styles.container },
        playerRoom,
        triviaQuestion,
        triviaAnswers,
        _react2.default.createElement(
          'div',
          { id: 'chatroom' },
          chatBox
        )
      );
    }

    // event is the eventHandler and target refers to the actual object

  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState({ textValue: event.target.value });
    }
  }, {
    key: 'newPlayer',
    value: function newPlayer(playerName) {
      console.log('Adding new User!');
      var _state2 = this.state,
          players = _state2.players,
          textValue = _state2.textValue;

      players.push({ username: playerName, score: 0 });

      // make a ajax call to post to create new User with score of 0
      _axios2.default.post('/post', {
        username: this.state.textValue
      }).then(function (response) {
        return console.log(response);
      }).catch(function (response) {
        return console.log(response);
      });

      textValue = '';

      this.setState({
        players: players,
        textValue: textValue
      });
    }
  }, {
    key: 'answerClick',
    value: function answerClick(response) {
      console.log('I am answering!');
      var _state3 = this.state,
          question = _state3.question,
          answers = _state3.answers,
          answer = _state3.answer,
          score = _state3.score;

      // check if response is equal to the answer
      // if it is, add a point to the user

      // change the question and answers and answer

      var randomNum = Math.floor(Math.random() * 6);
      question = listOfQuestions[randomNum];
      answer = listOfAnswers[randomNum];

      // picks a random position from 1 to 4 where to place the answer
      var randomPos = Math.floor(Math.random() * 4);
      answers[randomPos] = answer;

      answers.forEach(function (entry, i) {
        if (entry !== answer) {
          answers[i] = fillerWords[Math.floor(Math.random() * 8)];
        }
      });

      this.setState({
        question: question,
        answer: answer,
        answers: answers
      });
    }
  }]);

  return App;
}(_react.Component);

var styles = {
  container: {}
};

var listOfQuestions = ['In The Sword in the Stone, what does Merlin call The Greatest Force on Earth?', 'In Aladdin, what is the name of Jasmine’s pet tiger?', 'How did Walt’s Brother Roy propose to his wife Edna?', 'In Peter Pan, Captain Hook had a hook on which one of his hands?', 'What is now considered the fastest ride in Walt Disney World?', 'What author wrote the book that the animated feature The Jungle Book is based on?'];

var listOfAnswers = ['Love', 'Rajah', 'Telegram', 'His Left', 'Test Track', 'Rudyard Kipling'];

var fillerWords = ['Pretzel', 'Monkey', 'Dog', 'Sword', 'Bat', 'Crew', 'Ugly', 'Jackie Chan', 'Mickie Mouse', 'first', 'second', 'third'];

exports.default = App;

/***/ })

})