const User = require("../models/user");
const { handleError } = require("../utils/errors");

const setNewHighScore = (req, res, next) => {
  const { _id } = req.user;
  const { score, highScoreName } = req.params;
  // console.log("setNewHighScore ran, ", score, highScoreName)

  User.findByIdAndUpdate(
    _id,
    { [highScoreName]: score },
    { new: true, runValidators: true }
  )
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      handleError(err, res, next);
    });
};

module.exports = { setNewHighScore };
