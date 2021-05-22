const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { secretKey } = require("../utils/config");

const createUserToken = (username, userId) => {
  const userForToken = {
    username,
    id: userId,
  };
  return jwt.sign(userForToken, secretKey, { expiresIn: "1h" });
};

const comparePasswords = async (password, passwordHash) => {
  const passwordCorrect = await bcrypt.compare(password, passwordHash);
  return !passwordCorrect ? ["Invalid login", null] : [null, passwordCorrect];
};

const verifyToken = (token) => {
  const decodedToken = jwt.verify(token, secretKey);
  return !decodedToken.id ? ["invalid authorization", null] : [null, decodedToken];
};

module.exports = { comparePasswords, createUserToken, verifyToken };
