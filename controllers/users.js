const bcrypt = require("bcryptjs");
const User = require("../models/user");
const { createJWT } = require("../utils/jwt");
const { handleError } = require("../utils/errors");
const ConflictError = require("../errors/conflict-error");

const createUser = (req, res, next) => {
  // console.log("creaeteUser ran");
  const { username, password } = req.body;
  User.findOne({ username })
    .then((existingUser) => {
      if (existingUser) {
        return next(new ConflictError("E-mail unavailable"));
      }
      return bcrypt.hash(password, 8).then((hashedPassword) => {
        User.create({ username, password: hashedPassword })
          .then((user) => {
            const token = createJWT(user._id);
            const userWithoutPassword = user.toObject();
            delete userWithoutPassword.password;
            res.send({
              user: userWithoutPassword,
              token,
            });
          })
          .catch((err) => {
            handleError(err, res, next);
          });
      });
    })
    .catch((err) => {
      handleError(err, res, next);
    });
};

const getCurrentUser = (req, res, next) => {
  const { _id } = req.user;
  User.findById(_id)
    .orFail()
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      handleError(err, res, next);
    });
};

// const updateUser = (req, res, next) => {
//   const { _id } = req.user;
//   const { newName, newAvatar } = req.body;

//   User.findByIdAndUpdate(
//     _id,
//     { name: newName, avatar: newAvatar },
//     { new: true, runValidators: true }
//   )
//     .then((user) => {
//       res.send(user);
//     })
//     .catch((err) => {
//       handleError(err, res, next);
//     });
// };

const login = (req, res, next) => {
  // console.log("login ran: ");
  const { username, password } = req.body;
  return User.findUserByCredentials(username, password)
    .then((user) => {
      console.log("login .then ran: ");
      const token = createJWT(user._id);
      res.send({ token });
    })
    .catch((err) => {
      handleError(err, res, next);
    });
};

module.exports = {
  createUser,
  getCurrentUser,
  //  updateUser,
  login,
};
