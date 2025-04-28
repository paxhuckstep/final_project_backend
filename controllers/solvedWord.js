const User = require("../models/user");

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
