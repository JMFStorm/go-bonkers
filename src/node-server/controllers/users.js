const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/User");
const { secretKey } = require("../utils/config");

// Register user
const register = async (req, res) => {
  const { username, password } = req.body;

  const existingUser = await User.find({ username });

  if (existingUser.length > 0) {
    return res.status(200).json({ errors: { username: "Username already exists." } });
  }

  const passwordHash = await bcrypt.hash(password, 12);
  const user = new User({
    username,
    passwordHash,
    createdAt: new Date(),
  });

  const savedUser = await user.save();
  return res.status(201).json(savedUser);
};

// Login user
const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user) {
    return res.status(200).json({ errors: { username: "Invalid username or password." } });
  }

  const passwordCorrect = await bcrypt.compare(password, user.passwordHash);

  if (!passwordCorrect) {
    return res.status(200).json({ errors: { username: "Invalid username or password." } });
  }

  const userForToken = {
    username: user.username,
    id: user._id,
  };

  const token = jwt.sign(userForToken, secretKey, { expiresIn: "1h" });

  return res.status(200).send({ token, username: user.username, userId: user._id });
};

module.exports = { login, register };
