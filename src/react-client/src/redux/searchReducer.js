import { ADD_TAG, REMOVE_TAG, UPDATE_LOCATION, SET_SEARCH_TYPE, RESET_TAGS } from "./searchTypes";
import getSearchOptions from "../functions/getSearchData";

const initalState = {
  searchType: "places", // places || activities || events
  location: {
    lat: 60.1699,
    lng: 24.9384,
  }, // Current user location
  tags: [], // Categories for places
  searchDistance: 50, // Distance in km ?
  limit: 20, // Max places searched
  placeOptions: getSearchOptions("places"), // Available checkbox options
};

// Add tag function
const addTag = (state, payload) => {
  const newOptionsState = state.placeOptions.map((option) => {
    return option.value === payload.tagName ? { ...option, checked: !option.checked } : option;
  });
  return { ...state, tags: [...state.tags, payload.tagName], placeOptions: newOptionsState };
};

// Remove tag function
const removeTag = (state, payload) => {
  const newOptionsState = state.placeOptions.map((option) => {
    return option.value === payload.tagName ? { ...option, checked: !option.checked } : option;
  });
  return {
    ...state,
    tags: state.tags.filter((tag) => tag !== payload.tagName),
    placeOptions: newOptionsState,
  };
};

// Reset tags with remove all
const removeTags = (state) => {
  const newOptionsState = state.placeOptions.map((option) => {
    return option.checked ? { ...option, checked: false } : option;
  });
  return {
    ...state,
    tags: [],
    placeOptions: newOptionsState,
  };
};

const searchReducer = (state = initalState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_SEARCH_TYPE:
      return { ...state, searchType: payload.searchType, placeOptions: getSearchOptions(payload.searchType) };
    case ADD_TAG:
      return addTag(state, payload); // { ...state, tags: [...state.tags, payload.tagName] };
    case REMOVE_TAG:
      return removeTag(state, payload);
    case RESET_TAGS:
      return removeTags(state, payload);
    case UPDATE_LOCATION:
      return { ...state, location: payload.location };
    default:
      return state;
  }
};

export default searchReducer;
