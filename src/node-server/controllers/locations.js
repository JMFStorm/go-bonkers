const axios = require("axios").default;

const { helsinkiBaseApi } = require("../utils/config");

// Get location
const getLocation = async (req, res) => {
  const { locationId, type } = req.body;

  const url = `${helsinkiBaseApi}/v1/${type}/${locationId}`;
  const { data } = await axios.get(url);

  return res.status(200).json(data);
};

// Get locations
const getLocations = async (req, res) => {
  const { tags, limit, searchType, language, location, searchDistance } = req.body;

  const coordinates = [location.lat || "60", location.long || "25", searchDistance || "500"].join("%2C");
  const tagsArr = tags.join("%2C");
  const languageStr = language ? language : "fi";

  const url = `${helsinkiBaseApi}/v1/${searchType}/?tags_search=${tagsArr}&distance_filter=${coordinates}&language_filter=${languageStr}&limit=${limit}`;

  const { data } = await axios.get(url);

  return res.status(200).json(data.data);
};

module.exports = { getLocation, getLocations };
