const router = require("express").Router();
const {
  getLeaderboards,
  // updateUser
} = require("../controllers/leaderboards");
const { auth } = require("../middlewares/auth");
// const { validateUpdateUserData } = require("../middlewares/validation");

router.get("/", getLeaderboards);
// router.patch("/me", auth, validateUpdateUserData, updateUser);

module.exports = router;
