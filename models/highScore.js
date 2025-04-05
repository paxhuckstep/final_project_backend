const mongoose = require("mongoose");
const validator = require("validator");
const user = require("./user");

const highScore = new mongoose.Schema({
  score: { type: String, required: true, minlength: 2, maxlength: 30 },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "The owner url is required"],
    ref: user,
  },
  createdAt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("Score", highScore);
