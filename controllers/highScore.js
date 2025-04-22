// const ForbiddenError = require("../errors/forbidden-error");
// const Item = require("../models/solvedWord");
const Score = require("../models/highScore");
const User = require("../models/user");
const { handleError } = require("../utils/errors");

const setNewHighScore = (req, res, next) => {
  const { _id } = req.user;
  const { score } = req.params;
  // console.log(score, " req.body: ", req.body, "req.params: ", req.params);

  User.findByIdAndUpdate(
    _id,
    { pokemonHighScore: score },
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
