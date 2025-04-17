const router = require("express").Router();

// const { auth } = require("../middlewares/auth");

const {
  createNewSolvedWord,
} = require("../controllers/solvedWord");

// router.get("/", getSolvedWords);
router.put(":userId/:word",
  //  auth, validateWord, 
   createNewSolvedWord);

module.exports = router;
