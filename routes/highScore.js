const router = require("express").Router();
const { auth } = require("../middlewares/auth");
const { setNewHighScore } = require("../controllers/highScore");
const { validateHighScore } = require("../middlewares/validation");

router.put(
  "/:score",
  auth,
  validateHighScore,
  setNewHighScore
);

module.exports = router;
