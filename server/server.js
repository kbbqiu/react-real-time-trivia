const express = require('express');
const path = require('path');
var router = express.Router();

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

app.post('/post', mongoController.addPlayer)

http.listen(2020, () => {
  console.log("server listening at 2020");
})
