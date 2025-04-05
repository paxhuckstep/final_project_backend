const router = require("express").Router();

const { auth } = require("../middlewares/auth");

const {
  getSolvedWords,
  createNewSolvedWord,
} = require("../controllers/solvedWord");
const {
  validateCardBody,
  validateItemId,
} = require("../middlewares/validation");

// router.get("/", getItems);
// router.post("/", auth, validateCardBody, createItem);
// router.delete("/:itemId", auth, validateItemId, deleteItem);
// router.put("/:itemId/likes", auth, validateItemId, likeItem);
// router.delete("/:itemId/likes", auth, validateItemId, unlikeItem);

router.get("/", getSolvedWords);
router.post("/:word", auth, validateWord, createNewSolvedWord);
// router.delete("/:itemId", auth, validateItemId, deleteItem);
// router.put("/:word", auth, validateItemId, likeItem);
// router.delete("/:itemId/likes", auth, validateItemId, unlikeItem);

module.exports = router;
