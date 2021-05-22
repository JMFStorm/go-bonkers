const axios = require("axios").default;

const { weatherApiKey } = require("../utils/config");

// Get weather
const getWeather = async (req, res) => {
  const { city } = req.body;
  const { data } = await axios.get(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${weatherApiKey}`
  );
  return res.status(200).json(data);
};

module.exports = { getWeather };
