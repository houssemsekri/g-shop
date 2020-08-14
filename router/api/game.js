const express = require("express");
const router = express.Router();
const Game = require("../../models/Games");

router.post("/add", async (req, res) => {
  try {
    const game = await new Game(req.body);
    await game.save();
    res.json("success");
  } catch (error) {
    res.json("erroro");
  }
});
router.get("/", async (req, res) => {
  try {
    const game = await Game.find();
    res.json(game);
  } catch (error) {
    res.json("error");
  }
});
module.exports = router;
