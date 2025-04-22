const router = require("express").Router();
const {
  getLeaderboard,
  // updateUser
} = require("../controllers/leaderboards");
const { auth } = require("../middlewares/auth");
// const { validateUpdateUserData } = require("../middlewares/validation");

router.get("/:highScoreName", getLeaderboard);
// router.patch("/me", auth, validateUpdateUserData, updateUser);

module.exports = router;
