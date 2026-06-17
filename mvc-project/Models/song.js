const mongoose = require("mongoose");

const SongSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artist: { type: String },
  album: { type: String },
  genre: { type: String },
  duration: { type: Number },
  releaseDate: { type: Date },
  audio: { type: String },
});

module.exports = mongoose.model("Song", SongSchema);
