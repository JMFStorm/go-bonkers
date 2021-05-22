// Error handler endpoint
// eslint-disable-next-line max-params
const errorHandler = (err, req, res) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message,
    },
  });
};

module.exports = errorHandler;
