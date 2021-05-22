const Router = require("express");

const { getToken } = require("../middleware/authorization");
const { addFavourite, getFavourites, removeFavourite } = require("../controllers/favourites");

const favouritesRouter = Router();

// Add favourite
favouritesRouter.post("/", getToken, addFavourite);

// Get user favourites
favouritesRouter.get("/:userId", getFavourites);

// Remove favourite
favouritesRouter.delete("/:favouriteId", getToken, removeFavourite);

module.exports = favouritesRouter;
