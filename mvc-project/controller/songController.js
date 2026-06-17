const Song = require("../models/Song");

exports.addSong = async (req, res) => {
  try {
    const song = await Song.create({
      title: req.body.title,
      artist: req.body.artist,
      album: req.body.album,
      genre: req.body.genre,
      duration: req.body.duration,
      releaseDate: req.body.releaseDate,
      audio: req.body.audio,
    });

    res.status(201).json({
      message: "Song successfully saved",
      song,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllSongs = async (req, res) => {
  try {
    const songs = await Song.find();
    res.status(200).json({
      message: "List of songs",
      songs,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getSongById = async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);

    if (!song) {
      return res.status(404).json({ message: "Song not found" });
    }

    res.status(200).json({
      message: "Song details",
      song,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateSong = async (req, res) => {
  try {
    const payload = {
      title: req.body.title,
      artist: req.body.artist,
      album: req.body.album,
      genre: req.body.genre,
      duration: req.body.duration,
      releaseDate: req.body.releaseDate,
      audio: req.body.audio,
    };

    const song = await Song.findByIdAndUpdate(req.params.id, payload, {
      new: true,
      runValidators: true,
    });

    if (!song) {
      return res.status(404).json({ message: "Song not found" });
    }

    res.status(200).json({
      message: "Song updated",
      song,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteSong = async (req, res) => {
  try {
    const song = await Song.findByIdAndDelete(req.params.id);

    if (!song) {
      return res.status(404).json({ message: "Song not found" });
    }

    res.status(200).json({ message: "Song removed" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
