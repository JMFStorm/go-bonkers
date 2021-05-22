import { ADD_TAG, REMOVE_TAG, UPDATE_LOCATION, SET_SEARCH_TYPE, RESET_TAGS } from "./searchTypes";

// Search type
export const setSearchType = (searchType) => {
  return {
    type: SET_SEARCH_TYPE,
    payload: {
      searchType,
    },
  };
};

// Set tags
export const resetTags = () => {
  return {
    type: RESET_TAGS,
    payload: {},
  };
};

// Add tag
export const addTag = (tagName) => {
  return {
    type: ADD_TAG,
    payload: {
      tagName,
    },
  };
};

// Remove tag
export const removeTag = (tagName) => {
  return {
    type: REMOVE_TAG,
    payload: {
      tagName,
    },
  };
};

// Update location
export const updateLocation = (location) => {
  return {
    type: UPDATE_LOCATION,
    payload: {
      location,
    },
  };
};
