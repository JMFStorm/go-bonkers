import axios from "axios";

import typeSingular from "../functions/searchType";
import { getCurrentAuthToken } from "./user";
import { serverUrl } from "../utils/config";

export const fetchPlaces = async (searchParams) => await axios.post(`${serverUrl}api/locations`, searchParams);

export const fetchUserFavourites = async (userId) => await axios.get(`${serverUrl}api/favourites/${userId}`);

export const postRegisterRequest = async (userCreds) => {
  const response = await axios.post(`${serverUrl}api/users/register`, userCreds);
  return response.data;
};

export const postLoginRequest = async (userCreds) => {
  const response = await axios.post(`${serverUrl}api/users/login`, userCreds);
  return response.data;
};

export const postAddFavourite = async (favourite) => {
  const headers = { headers: { authorization: `bearer ${getCurrentAuthToken()}` } };
  const response = await axios.post(`${serverUrl}api/favourites`, favourite, headers);
  return response.data;
};

export const deleteFavourite = async (favouriteId) => {
  const headers = { headers: { authorization: `bearer ${getCurrentAuthToken()}` } };
  const response = await axios.delete(`${serverUrl}api/favourites/${favouriteId}`, headers);
  return response.data;
};

export const getLocationById = async (locationId, type) => {
  return await axios.post(`${serverUrl}api/locations/single`, { locationId, type: typeSingular(type) });
};

export const getCityWeather = async (city) => {
  return await axios.post(`${serverUrl}api/weather`, { city });
};
