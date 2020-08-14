var mongoose = require("mongoose");

const Schema = mongoose.Schema;

const gameSchema = new Schema({
  title: {
    type: String,
  },
  price: {
    type: String,
  },
  release: {
    type: String,
  },
  trailer: {
    type: String,
  },
  img: {
    type: String,
  },
  platform: {
    type: String,
  },
  studio: {
    type: String,
  },
  type: {
    type: String,
  },
  data: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = mongoose.model("Game", gameSchema);
