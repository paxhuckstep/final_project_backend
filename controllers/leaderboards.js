const User = require("../models/user");
const { handleError } = require("../utils/errors");

const getLeaderboard = (req, res, next) => {
  const { highScoreName } = req.params;
  User.find()
    .sort({ [highScoreName]: -1 })
    .limit(10)
    .then((leaderboardsData) => {
      console.log(leaderboardsData);
      res.send(leaderboardsData);
    })
    .catch((err) => {
      handleError(err, res, next);
    });
};

module.exports = { getLeaderboard };
