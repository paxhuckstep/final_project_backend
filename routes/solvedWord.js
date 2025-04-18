const router = require("express").Router();

const { auth } = require("../middlewares/auth");

const {
  addNewSolvedWord,
} = require("../controllers/solvedWord");

// router.get("/", getSolvedWords);
router.put("/:word",
   auth,
  //  validateWord, 
   addNewSolvedWord);

module.exports = router;
