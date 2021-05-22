const Router = require("express");

const { getWeather } = require("../controllers/weather");

const weatherRouter = Router();

// Get weather
weatherRouter.post("/", getWeather);

module.exports = weatherRouter;
