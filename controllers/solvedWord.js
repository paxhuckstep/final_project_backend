// const ForbiddenError = require("../errors/forbidden-error");
const Item = require("../models/solvedWord");
// const { handleError } = require("../utils/errors");

const createNewSolvedWord = (req, res, next) => {
  const { word } = req.body;
  const owner = req.user._id;

  Item.create({ word, owner })
    .then((item) => { // LETS SEND A WHOLE NEW USER DATA FOR EASE OF USE ON FRONT END.
      res.send({ data: item });
    })
    .catch((err) => {
      // handleError(err, res, next);
    });
};


module.exports = { createNewSolvedWord, getSolvedWords};
