// Heroku url
const herokuUrl = "https://go-bonkers-app.herokuapp.com/";

// Localhost url
const localUrl = "http://localhost:4000/";

export const determineServerUrl = (processEnv) => {
  switch (processEnv) {
    case "production":
      return herokuUrl;
    case "development":
      return localUrl;
    case "test":
      return herokuUrl;
    default:
      return localUrl;
  }
};

export const mapApiKey = process.env.REACT_APP_MAP_API_KEY;
export const serverUrl = determineServerUrl(process.env.NODE_ENV);
