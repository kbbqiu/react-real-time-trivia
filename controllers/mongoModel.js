const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema ({
  username: { type: String, required: true },
  score: { type: Number, default: 0 }
})

const player = mongoose.model('players', playerSchema);

module.exports = player;

