const express = require("express");
require("express-async-errors");
const cors = require("cors");
const path = require("path");

const locationsRouter = require("../routes/locations");
const usersRouter = require("../routes/users");
const favouritesRouter = require("../routes/favourites");
const weatherRouter = require("../routes/weather");

const notFound = require("../error/notFound");
const errorHandler = require("../error/errorHandler");

// Use Express
const app = express();

// Use cors
app.use(cors());

// Use JSON parser
app.use(express.json());

// Use static frontend files
const build = path.join(__dirname, "../build");
app.use(express.static(build));

// Use routes
app.use("/api/users", usersRouter);
app.use("/api/locations", locationsRouter);
app.use("/api/favourites", favouritesRouter);
app.use("/api/weather", weatherRouter);

// Handle errors
app.use(notFound);
app.use(errorHandler);

module.exports = app;
