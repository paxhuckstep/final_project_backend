const ForbiddenError = require("../errors/forbidden-error");
// const Item = require("../models/solvedWord");
const Score = require("./modles/highScores");
const { handleError } = require("../utils/errors");

const setNewHighScore = (req, res, next) => {
  const { score } = req.body;
  const owner = req.user._id;

  Item.create({ score, owner })
    .then((item) => {
      // again do we send back a whole new userData ????
      res.send({ data: item });
    })
    .catch((err) => {
      handleError(err, res, next);
    });
};

module.exports = { setNewHighScore };
