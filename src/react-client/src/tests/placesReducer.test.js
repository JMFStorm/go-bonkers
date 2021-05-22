import deepFreeze from "deep-freeze";

import examplePlace from "../data/examplePlace.json";
import placesReducer from "../redux/placesReducer";
import { setLoadingState, selectPlace } from "../redux/placesActions";

const initialPlacesState = {
  isLoading: false,
  places: [],
  selectedPlace: {},
};

describe("placesReducer", () => {
  test("setLoadingState works", () => {
    deepFreeze(initialPlacesState);
    const state1 = placesReducer(initialPlacesState, setLoadingState(true));

    deepFreeze(state1);
    expect(state1.isLoading).toEqual(true);
    const state2 = placesReducer(state1, setLoadingState(false));
    expect(state2.isLoading).toEqual(false);

    deepFreeze(state2);
    const state3 = placesReducer(state2, setLoadingState(true));
    expect(state3.isLoading).toEqual(true);

    deepFreeze(state3);
    const state4 = placesReducer(state3, setLoadingState(true));
    expect(state4.isLoading).toEqual(true);
    expect(state4.isLoading).not.toEqual(false);
  });

  test("selectPlace works", () => {
    const placeObject = examplePlace;

    deepFreeze(initialPlacesState);
    const state1 = placesReducer(initialPlacesState, selectPlace(placeObject));
    expect(state1.selectedPlace).toEqual(placeObject);
    expect(state1.selectedPlace).toBeDefined();
  });
});
