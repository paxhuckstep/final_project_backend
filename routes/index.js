const router = require("express").Router();
const solvedWordRouter = require("./solvedWord");
const highScoreRouter = require("./highScore");
const leaderboardsRouter = require("./leaderboards");
const userRouter = require("./users");
const { createUser, login } = require("../controllers/users");
const {
  validateLoginAttempt,
  validateNewUserData,
} = require("../middlewares/validation");
const NotFoundError = require("../errors/not-found-error");

router.post(
  "/signin",
  validateLoginAttempt,
  login
);
router.post(
  "/signup",
  validateNewUserData,
  createUser
);
router.use("/solvedword", solvedWordRouter);
router.use("/highscore", highScoreRouter);
router.use("/users", userRouter);
router.use("/leaderboards", leaderboardsRouter);

router.use((req, res, next) => {
  return next(new NotFoundError("Router not found"));
});

module.exports = router;
