const mongoose = require("mongoose");

const { mongoDbUri } = require("../utils/config");

const mongoConnection = () => {
  mongoose
    .connect(mongoDbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(() => {
      // console.info("connected to MongoDB");
    })
    .catch(() => {
      // console.error("error connection to MongoDB:", error.message);
    });
};

module.exports = mongoConnection;
