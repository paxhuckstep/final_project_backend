const router = require("express").Router();
const { auth } = require("../middlewares/auth");
const { setNewHighScore } = require("../controllers/highScore");

router.put(
  "/:score",
  auth,
  // validateWord,
  setNewHighScore
);

module.exports = router;
