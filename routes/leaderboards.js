const router = require("express").Router();
const {
  getLeaderboard,
} = require("../controllers/leaderboards");
const {
  validateLeaderboard,
} = require("../middlewares/validation");
// const { auth } = require("../middlewares/auth");


router.get("/:highScoreName", validateLeaderboard, getLeaderboard);
// router.patch("/me", auth, validateUpdateUserData, updateUser);

module.exports = router;
