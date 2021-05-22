import { SET_PLACES_LOADING_STATE, SET_PLACES, SELECT_PLACE } from "./placesTypes";
import { fetchPlaces } from "../services/api";

// Set places
export const setPlaces = (places) => {
  return {
    type: SET_PLACES,
    payload: {
      places,
    },
  };
};

// Set loading
export const setLoadingState = (isLoading) => {
  return {
    type: SET_PLACES_LOADING_STATE,
    payload: {
      isLoading,
    },
  };
};

// Get places
export const getPlaces = (searchParams) => {
  return async (dispatch) => {
    dispatch(setLoadingState(true));
    const { data } = await fetchPlaces(searchParams);
    dispatch(setLoadingState(false));
    data ? dispatch(setPlaces(data)) : null;
  };
};

// Select place
export const selectPlace = (place) => {
  return {
    type: SELECT_PLACE,
    payload: {
      place,
    },
  };
};
