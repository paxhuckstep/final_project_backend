const ForbiddenError = require("../errors/forbidden-error");
// const Item = require("../models/solvedWord");
const Score = require("./modles/highScores")
const { handleError } = require("../utils/errors");

const createNewHighScoreWord = (req, res, next) => {
  const { score } = req.body;
  const owner = req.user._id;

  Item.create({ word, owner })
    .then((item) => {
      res.send({ data: item });
    })
    .catch((err) => {
      handleError(err, res, next);
    });
};


const getThisUsersHighScore = (req, res, next) => {
  Item.find({})
    .then((clothingItems) => {
      res.send(clothingItems);
    })
    .catch((err) => {
      handleError(err, res, next);
    });
};

module.exports = { createItem, getItems, deleteItem, likeItem, unlikeItem };
