const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  // email: {
  //   type: String,
  //   required: true,
  //   unique: true,
  //   validate: {
  //     validator(value) {
  //       return validator.isEmail(value);
  //     },
  //     message: "You must enter a valid e-mail address",
  //   },
  // },
  password: {
    type: String,
    required: [true, "password is required"],
    select: false,
  },
  solvedWords: {
    type: Array,
    required: false,
  },
  pokemonHighScore: {
    type: Number,
    required: false,

  }
});

userSchema.statics.findUserByCredentials = function findUserByCredentials(
  username,
  password
) {
  return this.findOne({ email })
    .select("+password")
    .then((user) => {
      if (!user) {
        return Promise.reject(new Error("Incorrect email or password"));
      }
      return bcrypt.compare(password, user.password).then((matched) => {
        if (!matched) {
          return Promise.reject(new Error("Incorrect email or password"));
        }

        return user;
      });
    });
};

module.exports = mongoose.model("User", userSchema);
