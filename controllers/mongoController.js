const Player = require('./mongoModel');

const controller = {

  retrieveAll(req, res) {
    Player.find({}, (err, players) => {
      res.status(200).json(players);
    })
  },

  addPlayer(req, res) {
    console.log(req.body.username);

    Player.create({
      username: req.body.username,
      socketID: req.body.socketID
    }, (err, player) => {
      if (err) {
        return res.status(400).json("Error")
      }
      res.status(200).json(player);
      return;
    })
  },

  incrementScore(req, res) {
    Player.findOne({ socketID: req.body.socketID }, (err, player) => {
      player.score += 10;

      player.save((err, user) => {
        if (err) console.error('Error');
        else res.status(200).json(user);
      })
    })
  }
}

module.exports = controller;