const Router = require("express");

const { login, register } = require("../controllers/users");

const usersRouter = Router();

// Register user
usersRouter.post("/register", register);

// Login user
usersRouter.post("/login", login);

module.exports = usersRouter;
