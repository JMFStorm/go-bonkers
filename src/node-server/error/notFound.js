// 404 for invalid route
const notFound = (req, res, next) => {
  const error = {
    message: "Not found",
    status: 404,
  };
  next(error);
};

module.exports = notFound;
