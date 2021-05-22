/* eslint-disable fp/no-delete */
const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
  username: {
    required: true,
    type: String,
    unique: true,
    minlength: 5,
  },
  passwordHash: {
    required: true,
    type: String,
  },
  createAt: String,
  favourites: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Favourite",
    },
  ],
});

userSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    // eslint-disable-next-line fp/no-mutation
    returnedObject.userId = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.passwordHash;
  },
});

userSchema.plugin(uniqueValidator);
const User = mongoose.model("User", userSchema);

module.exports = User;
