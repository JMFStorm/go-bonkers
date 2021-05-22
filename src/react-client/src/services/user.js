import { getCurrentUser } from "./storage";

export const userLikesLocation = (userLikedLocationIDs, currentLocationId) => {
  const foundLocation = userLikedLocationIDs.filter((l) => l.placeId === currentLocationId);
  return foundLocation.length > 0 ? true : false;
};

export const getCurrentAuthToken = () => {
  const user = getCurrentUser();
  return user.token;
};

export const getLocationDbId = (locationId, userLocations) => {
  const dbId = userLocations.filter((l) => l.placeId === locationId);
  return dbId[0].id;
};
