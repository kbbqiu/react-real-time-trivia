import React, { Component } from 'react'
import { react } from 'react-dom'
import axios from 'axios'
import Answers from './Answers.jsx'
import CurrentPlayers from './CurrentPlayers.jsx'
import Trivia from './Trivia.jsx'

var socket = io();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "In The Sword in the Stone, what/who does Merlin call The Greatest Force on Earth?",
      answers: ['Love', 'Camelot', 'King Arthur', 'The Round Table'],
      answer: 'Love',
      players: [],
      textValue: ''
    }
  }

  render() {
    let { question, answers, players } = this.state;

    let triviaQuestion = <Trivia question={question} />
    let triviaAnswers = <Answers answers={answers} onClick={this.answerClick.bind(this)} />
    let playerRoom = <CurrentPlayers value={this.state.textValue} players={this.state.players} change={this.handleChange.bind(this)} newUser={this.newPlayer.bind(this)} />

    return (
      <div style={styles.body}>
        {playerRoom}
        <div style={styles.container}>
          {triviaQuestion}
          {triviaAnswers}
        </div>
      </div>
    );
  }

  componentDidMount() {
    socket.on('new:user', (username) => {

      axios.get('/get').then((response) => {
        let { players, textValue } = this.state;
        players = response.data;
        textValue = '';
        this.setState({
          players,
          textValue
        })
      });
    });

    socket.on('score', (socketID) => {
      axios.get('/get').then((response) => {
        let { players } = this.state;
        players = response.data;

        this.setState({
          players
        })
      });
    })
  }


  // event is the eventHandler and target refers to the actual object
  handleChange(event) {
    event.preventDefault();
    this.setState({ textValue: event.target.value });
  }

  newPlayer(playerName) {
    console.log('Adding new User!')
    let { players, textValue } = this.state;

    // make a ajax call to post to create new User with score of 0 and unique socket ID
    axios.post('/post', {
      username: this.state.textValue,
      socketID: socket.id
    }).then((response => console.log('response'))).catch((response) => console.log('response'))

    socket.emit('new:user', playerName);
  }

  answerClick(response) {
    console.log('I am answering!')

    let { question, answers, answer, score } = this.state;

    // check if response is equal to the answer
    if (response === answer) {
      socket.emit('score', socket.id);
      // if it is, add a point to the user by making a request to the server to update
      axios.patch('/patch', {
        socketID: socket.id
      }).then((response => console.log('hi'))).catch((response) => console.log('hi'))
    }

    // change the question and answers and answer
    let randomNum = Math.floor(Math.random() * (disneyTrivia.length - 1));
    question = disneyTrivia[randomNum].question;
    answer = disneyTrivia[randomNum].answer;

    // picks a random position from 1 to 4 where to place the answer
    let randomPos = Math.floor(Math.random() * 4);
    answers[randomPos] = answer;

    answers.forEach((entry, i) => {
      if (entry !== answer) {
        answers[i] = disneyTrivia[randomNum].words[Math.floor(Math.random() * 5)]
      }
    })

    this.setState({
      question,
      answer,
      answers,
    })
  }
}

const styles = {
  body: {
    textAlign: 'center'
  },
  container: {
    position: 'relative',
    top: '180',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    width: '500px',
    margin: '0 auto',
    padding: '2% 1%',
    fontWeight: 'bold'
  }
}

const disneyTrivia = [
  { question: 'What is Mr Toads Full Name', answer: 'J. Thaddeus Toad', words: ['John Green Toad', 'Mr Toads', 'Rudard Toad Kipling', 'Ralph Spagnuolo Toad', 'Toad Levi Mouzon'] },
  { question: 'In Aladdin, what is the name of Jasmines pet tiger?', answer: "Rajah", words: ["Simba", "Mufasa", "Gorilla", "Monkey", "Angel"] },
  { question: "What author wrote the book that the animated feature The Jungle Book is based on?", answer: "Rudyard Kipling", words: ["J. Thaddeus Kim", "Ralph Spagnuolo", "Levi Mouzon", "Ryan Cincina", "Abel James Porter"] },
  { question: "When does Mary Poppins say she will leave the Banks' house?", answer: "When the WInd Changes", words: ["When the Sun Rises", "When the Sky Rains", "When the Breeze Changes", "When the Moon Rises", "When the Stars Shine"] },
  { question: "In the Lion King, where does Mufasa and his family live?", answer: "Pride Rock", words: ["My Rock", "Rock Pride", "Pride Parade", "Rock Home", "Pride of the Rock"] },
  { question: "What is the motto for the Rescue Aid Society in The Rescuers?", answer: "We Never Fail to do What is Right", words: ["We Always Fail to do the right thing", "Why do we always fail", "We never do anything right", "We always do what is right", "We are never wrong"] },
  { question: "In Dumbo, where is Mrs. Jumbo when the stork delivers her baby?", answer: "In the circus Train", words: ["In the bathtub", "On the crazy train", "In the birdhouse", "Over the rainbow", "Aboard the ship"] },
  { question: "What town is the setting for the Disney Movie 'The Love Bug?'", answer: "San Francisco", words: ["Los Angeles", "Tokyo", "New York", "San Jose", "Santa Barbara"] },
  { question: "In Beauty and the Beast, how many egss does Gaston eat for breakfast?", answer: "5 Dozen", words: ["10 Dozen", "12 Dozen", "2 Dozen", "1 Dozen", "6 Dozen"] },
  { question: "During the battle with Aladdin, what type of animal does Jafar transform himself into?", answer: "A Cobra", words: ["A Lion", "A Snake", "Slytherin", "A Wild Draco Malfoy", "A Serpent"] },
  { question: "Which full length animated feature did Walt Disney originally consider having as a Live Action Film with Mary Martin having the lead role?", answer: "Peter Pan", words: ["Neverland", "Lost Boys", "Tinker Bell", "Wendy", "Captain Hook"] },
  { question: "Before Mickey Mouse, what Disney character was suggested to be the Sorcerer's Apprentice in Fantasia?", answer: "Dopey", words: ["Sleepy", "Sneezy", "Drunky", "Mary", "Merry"] },
  { question: "After being on earth, where did Hercules first meet his father Zeus?", answer: "In the Temple of Zeus", words: ["In the Temple of Athena", "In the Temple of Artemis", "In the temple of Hera", "In the Temple of Apollo", "In the temple of Hades"] },
  { question: "In Toy Story, what game does the slinky play?", answer: "Checkers", words: ["Chess", "Chinese Checkers", "Rumey", "Solitaire", "Go Fish"] },
  { question: "In Mary Poppins, what animal was on the end of Mary Poppins' umbrella that spoke?", answer: "A Parrot", words: ["A Dog", "A Cat", "An Owl", "A Pigeon", "A Hawk"] },
  { question: "In Hercules, Hades promised not to harm Megara provided that Hercules give up his strength. How long did he have to agree to give up his strength for?", answer: "24 Hours", words: ["11 Days", "1 Day", "23 Hours", "7 Hours", "12 Hours"] },
  { question: "What actor provided the voice of Lumiere in Beauty & the Beast?", answer: "Jerry Orbach", words: ["Gary Horbach", "Larry Orrock", "Harry Morbock", "Mary Snowbach", "Kevin Lorax"] },
  { question: "Friday's Question:What is the name of the original novel that inspired the full length feature animation: The Hunchback of Notre Dame?", answer: "Notre Dame de Paris", words: ["Notre Dame de Franz", "Notre Dame di Florenz", "Notre Dame University", "Not your Dame", "Not Notre Dame of Anything"] },
  { question: "Which Disney Full Length Animated Fetaure was the last one to use a storybook as an introduction in the begining of the movie?", answer: "Robin Hood", words: ["Robin Good", "Green Arrow", "Green Lantern", "Deadpool", "Christopher Robin"] },
  { question: "In what full length animated feature would you find a villain named Sykes?", answer: "Oliver and Company", words: ["Kevin and Mary and Company", "Alpha and Omega", "Derek and Steven and Company", "Codesmith and Company", "Keepin' me Company"] },
  { question: "In Aladdin, another actor was suggested to do the voice of the parrot Iago, who was it?", answer: "Danny DeVito", words: ["Josh Gad", "Christopher Paolini", "J.K. Rowling", "Jackie Chan", "Scarlet Johannson"] },
  { question: "What was the name of the dragon (god wanna be) in Mulan?", answer: "Mushu", words: ["Mishu", "Miso", "Soup", "Mashu", "Machu"] },
  { question: "In Lady & the Tramp, by what name did Tony call Tramp?", answer: "Butch", words: ["Dutch", "Ditch", "Bitch(Dog)", "Hitch", "Balto"] },
  { question: "What was the name of the whale in Pinocchio?", answer: "Monstro", words: ["Monstros", "Monsters", "Monsteros", "Moby Dick", "White Whale"] }
]

export default App;