import { SET_PLACES_LOADING_STATE, SET_PLACES, SELECT_PLACE } from "./placesTypes";

const initalState = {
  isLoading: false,
  places: [],
  selectedPlace: {},
};

const placesReducer = (state = initalState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_PLACES_LOADING_STATE:
      return { ...state, isLoading: payload.isLoading };
    case SET_PLACES:
      return { ...state, places: payload.places };
    case SELECT_PLACE:
      return { ...state, selectedPlace: payload.place };
    default:
      return state;
  }
};

export default placesReducer;
