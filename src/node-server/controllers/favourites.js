const Favourite = require("../models/Favourite");
const User = require("../models/User");

// Add new favourite
const addFavourite = async (req, res) => {
  const { type, placeId, name } = req.body;
  const userId = req.userId;

  const user = await User.findById(userId);

  if (!user) {
    return res.status(401).json({ error: "invalid authorization" });
  }

  const newFavourite = new Favourite({
    type: type,
    placeId: placeId,
    name,
    createdAt: new Date(),
    user: user._id,
  });

  const savedFavourite = await newFavourite.save();
  user.favourites = user.favourites.concat(savedFavourite._id);
  await user.save();

  return res.status(201).json(newFavourite);
};

// Get all favourites
const getFavourites = async (req, res) => {
  const { userId } = req.params;
  const favourites = await Favourite.find({ user: userId });
  return res.json(favourites);
};

// Remove favourite
const removeFavourite = async (req, res) => {
  const { favouriteId } = req.params;
  const userId = req.userId;

  const user = await User.findById(userId);

  if (!user || !user.favourites.includes(favouriteId)) {
    return res.status(401).json({ error: "Action denied" });
  }

  await Favourite.findByIdAndRemove(favouriteId);

  user.favourites = user.favourites.filter((f) => {
    return String(f) !== favouriteId;
  });

  await user.save();

  return res.status(204).end();
};

module.exports = { addFavourite, getFavourites, removeFavourite };
