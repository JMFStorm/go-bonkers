const Router = require("express");

const { getLocation, getLocations } = require("../controllers/locations");

const locationsRouter = Router();

// Get location
locationsRouter.post("/single", getLocation);

// Get locations
locationsRouter.post("/", getLocations);

module.exports = locationsRouter;
