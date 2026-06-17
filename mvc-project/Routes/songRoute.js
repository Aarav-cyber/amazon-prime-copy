const express = require("express");
const {
  addSong,
  getAllSongs,
  getSongById,
  updateSong,
  deleteSong,
} = require("../controller/songController");

const router = express.Router();

router.post("/add/song", addSong);
router.get("/get/songs", getAllSongs);
router.get("/get/songs/:id", getSongById);
router.put("/update/songs/:id", updateSong);
router.delete("/del/songs/:id", deleteSong);

module.exports = router;
