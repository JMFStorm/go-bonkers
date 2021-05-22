import deepFreeze from "deep-freeze";

import placeOptions from "../data/locationOptions.json";
import searchReducer from "../redux/searchReducer";
import { updateLocation, addTag, removeTag, setSearchType } from "../redux/searchActions";

const initialSearchState = {
  searchType: "places", // places || activities || events
  location: {}, // Current user location
  tags: [], // Categories for places
  searchDistance: 50, // Distance in km ?
  limit: 20, // Max places searched
  placeOptions: placeOptions.map((option) => {
    return { ...option, checked: false };
  }), // Available checkbox options
};

test("addTag and removeTag work", () => {
  deepFreeze(initialSearchState);
  const state1 = searchReducer(initialSearchState, addTag("Cafe"));
  expect(state1.tags).toHaveLength(1);
  expect(state1.tags).toContain("Cafe");
  expect(state1.tags).not.toContain("Restaurant");

  deepFreeze(state1);
  const state2 = searchReducer(state1, addTag("Restaurant"));
  expect(state2.tags).toHaveLength(2);
  expect(state2.tags).toContain("Cafe");
  expect(state2.tags).toContain("Restaurant");

  deepFreeze(state2);
  const state3 = searchReducer(state2, removeTag("Cafe"));
  expect(state3.tags).toHaveLength(1);
  expect(state3.tags).not.toContain("Cafe");
  expect(state3.tags).toContain("Restaurant");
});

test("updateLocation works", () => {
  const location1 = {
    lat: 1,
    lng: 1,
  };

  const location2 = {
    lat: 2,
    lng: 2,
  };

  deepFreeze(initialSearchState);
  const state1 = searchReducer(initialSearchState, updateLocation(location1));
  expect(state1.location).toEqual(location1);
  expect(state1.location).not.toEqual(location2);

  deepFreeze(state1);
  const state2 = searchReducer(state1, updateLocation(location2));
  expect(state2.location).not.toEqual(location1);
  expect(state2.location).toEqual(location2);
});

test("setSearchType works", () => {
  const events = "events";
  const places = "places";

  deepFreeze(initialSearchState);
  const state1 = searchReducer(initialSearchState, setSearchType(events));
  expect(state1.searchType).not.toEqual(places);
  expect(state1.searchType).toEqual(events);

  deepFreeze(state1);
  const state2 = searchReducer(state1, setSearchType(places));
  expect(state2.searchType).toEqual(places);
  expect(state2.searchType).not.toEqual(events);
});
