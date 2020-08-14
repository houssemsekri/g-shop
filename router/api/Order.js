const express = require("express");
const router = express.Router();
const Order = require("../../models/Order");
router.post("/", async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.json("nice");
  } catch (error) {
    res.json(error);
  }
});
module.exports = router;
