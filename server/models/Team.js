const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TeamSchema = new Schema({
  name: String,
  color: String,
  score: Number
  }
);

const Team = mongoose.model("Team", TeamSchema);
module.exports = Team;
