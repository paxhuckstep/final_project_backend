const router = require("express").Router();

const { auth } = require("../middlewares/auth");

const { validateSolvedWord } = require("../middlewares/validation");

const { addNewSolvedWord } = require("../controllers/solvedWord");

router.put("/:word", auth, validateSolvedWord, addNewSolvedWord);

module.exports = router;
