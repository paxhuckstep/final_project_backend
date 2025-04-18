// const ForbiddenError = require("../errors/forbidden-error");
const Item = require("../models/solvedWord");
const User = require("../models/user");
// const { handleError } = require("../utils/errors");

// const createNewSolvedWord = (req, res, next) => {
//   const { word } = req.body;
//   const owner = req.user._id;

//   Item.create({ word, owner })
//     .then((item) => { // LETS SEND A WHOLE NEW USER DATA FOR EASE OF USE ON FRONT END.
//       res.send({ data: item });
//     })
//     .catch((err) => {
//       // handleError(err, res, next);
//     });
// };



const addNewSolvedWord = (req, res, next) => {
  const { _id } = req.user;
  const { word } = req.params;
  User.findByIdAndUpdate(
    _id,
    { $addToSet: { solvedWords: word } },
    { new: true }
  )
    .orFail()
    .then((userData) => {
      res.send(userData);
    })
    .catch((err) => {
      handleError(err, res, next);
    });
};



module.exports = { addNewSolvedWord };
