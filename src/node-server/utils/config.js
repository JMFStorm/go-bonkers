require("dotenv").config();

const determineDbUri = (processEnv) => {
  switch (processEnv) {
    case "production":
      return process.env.MONGODB_URI_PROD;
    case "development":
      return process.env.MONGODB_URI_DEV;
    case "test":
      return process.env.MONGODB_URI_TEST;
    default:
      return "";
  }
};

const nodeEnvironment = process.env.NODE_ENV;
const mongoDbUri = determineDbUri(nodeEnvironment);

const secretKey = process.env.SECKRET_KEY;
const port = process.env.PORT;
const helsinkiBaseApi = "http://open-api.myhelsinki.fi";
const weatherApiKey = process.env.WEATHER_API_KEY;

module.exports = {
  secretKey,
  port,
  mongoDbUri,
  helsinkiBaseApi,
  weatherApiKey,
};
