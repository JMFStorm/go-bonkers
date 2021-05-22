const { verifyToken } = require("../services/authorization");

const getToken = (req, res, next) => {
  const authorization = req.get("authorization");
  // console.log("authorization", authorization);
  const token = authorization.substring(7);
  if (!authorization || !authorization.toLowerCase().startsWith("bearer ")) {
    return next(res.status(401).json({ error: "Invalid token" }));
  }

  const [tokenError, decodedToken] = verifyToken(token);
  if (tokenError) {
    return next(res.status(401).json({ error: "invalid authorization" }));
  }
  // eslint-disable-next-line fp/no-mutation
  req.userId = decodedToken.id;
  next();
};

module.exports = { getToken };
