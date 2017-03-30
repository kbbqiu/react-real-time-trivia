const express = require('express');
const path = require('path');

const db = require('./db');

const app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

const mongoController = require('./../controllers/mongoController.js');

// serves all files in build route
app.use(express.static(path.join(__dirname, './../build')))

app.get('/get', mongoController.retrieveAll);

app.post('/post', mongoController.addPlayer);

app.patch('/patch', mongoController.incrementScore);

// app.post('/update', mongoController.incrementScore)

io.on('connection', socket => {
  console.log('a user has connected on socket', socket.id);

  socket.on('disconnect', () => {
    console.log(socket.id, 'disconnected')
  });
  
  socket.on('new:user', (input) => {  // takes in the mesage
    io.emit('new:user', input)  // broadcast to everyone
  });

  socket.on('score', (socketID) => {
    console.log('server', socketID);
    io.emit('score', socketID)
  });
})

http.listen(2020, () => {
  console.log("server listening at 2020");
})
