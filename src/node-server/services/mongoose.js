const mongoose = require("mongoose");

const Favourite = require("../models/Favourite");
const User = require("../models/User");

module.exports.closeConnection = () => {
  mongoose.connection.close();
};

module.exports.deleteFavourites = async () => {
  await Favourite.deleteMany({});
};

module.exports.deleteUsers = async () => {
  await User.deleteMany({});
};

module.exports.getFavourites = async () => {
  const favourites = await Favourite.find({});
  return favourites.map((f) => f.toJSON());
};

module.exports.getUsers = async () => {
  const users = await User.find({});
  return users.map((u) => u.toJSON());
};
