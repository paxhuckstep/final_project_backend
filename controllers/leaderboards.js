const User = require("../models/user");
const { handleError } = require("../utils/errors");

const getLeaderboards = (req, res, next) => {
  console.log(req);

  /// get the top 10 scores out of mongo
// .then((leaderboardsData) => {
//     console.log(leaderboardsData)
//       res.send(leaderboardsData);
//     })
//     .catch((err) => {
//       handleError(err, res, next);
//     });
};


module.exports = { getLeaderboards };
