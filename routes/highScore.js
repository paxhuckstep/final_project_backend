const router = require("express").Router();

// const { auth } = require("../middlewares/auth");

const {
  setNewHighScore,
} = require("../controllers/highScore");


router.get("/", getSolvedWords);
router.put(":userId/:score",
  //  auth, validateWord, 
   setNewHighScore);

module.exports = router;
