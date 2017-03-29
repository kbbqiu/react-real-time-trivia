const Player = require('./mongoModel');

const controller = {

  addPlayer(req, res) {
    console.log('hello');
    console.log(req.body.username);

    Player.create({
      username: req.body.username
    }, (err, player) => {
      if (err) {
        return res.status(400).json("Error")
      }
      res.status(200).json(player);
      return;
    })
  },

  getPlayers() {

  }
}

module.exports = controller;