import React, { Component } from 'react'
import { react } from 'react-dom'
import axios from 'axios'
import Answers from './Answers.jsx'
import CurrentPlayers from './CurrentPlayers.jsx'
import Trivia from './Trivia.jsx'
import Chat from './Chatbox.jsx'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "In The Sword in the Stone, what does Merlin call The Greatest Force on Earth?",
      answers: ['Love', 'React', 'SoFkingHard', 'Death'],
      answer: 'Love',
      players: [],
      textValue: ''
    }
  }

  render() {
    let { question, answers } = this.state;
    let triviaQuestion = <Trivia question={question} />
    let triviaAnswers = <Answers answers={answers} onClick={this.answerClick.bind(this)} />
    let playerRoom = <CurrentPlayers value={this.state.textValue} players={this.state.players} change={this.handleChange.bind(this)} newUser={this.newPlayer.bind(this)} />
    let chatBox = <Chat />

    return (
      <div style={styles.container}>
        {playerRoom}
        {triviaQuestion}
        {triviaAnswers}
        <div id="chatroom">
          {chatBox}
        </div>
      </div>
    );
  }

  // event is the eventHandler and target refers to the actual object
  handleChange(event) {
    this.setState({ textValue: event.target.value });
  }

  newPlayer(playerName) {
    console.log('Adding new User!')
    let { players, textValue } = this.state;
    players.push({ username: playerName, score: 0 });

    // make a ajax call to post to create new User with score of 0
    axios.post('/post', {
        username: this.state.textValue
      }).then((response => console.log(response))).catch((response) => console.log(response))

    textValue = '';

    this.setState({
      players,
      textValue
    })
  }

  answerClick(response) {
    console.log('I am answering!')
    let { question, answers, answer, score } = this.state;

    // check if response is equal to the answer
    // if it is, add a point to the user

    // change the question and answers and answer
    let randomNum = Math.floor(Math.random() * 6);
    question = listOfQuestions[randomNum];
    answer = listOfAnswers[randomNum];


    // picks a random position from 1 to 4 where to place the answer
    let randomPos = Math.floor(Math.random() * 4);
    answers[randomPos] = answer;

    answers.forEach((entry, i) => {
      if (entry !== answer) {
        answers[i] = fillerWords[Math.floor(Math.random() * 8)]
      }
    })

    this.setState({
      question,
      answer,
      answers
    })
  }
}

const styles = {
  container: {
  }
}

const listOfQuestions = [
  'In The Sword in the Stone, what does Merlin call The Greatest Force on Earth?',
  'In Aladdin, what is the name of Jasmine’s pet tiger?',
  'How did Walt’s Brother Roy propose to his wife Edna?',
  'In Peter Pan, Captain Hook had a hook on which one of his hands?',
  'What is now considered the fastest ride in Walt Disney World?',
  'What author wrote the book that the animated feature The Jungle Book is based on?',
]

const listOfAnswers = [
  'Love', 'Rajah', 'Telegram', 'His Left', 'Test Track', 'Rudyard Kipling'
]

const fillerWords = [
  'Pretzel', 'Monkey', 'Dog', 'Sword', 'Bat', 'Crew', 'Ugly', 'Jackie Chan',
  'Mickie Mouse', 'first', 'second', 'third'
]


export default App;