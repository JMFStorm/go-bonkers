import locationOptions from "../data/locationOptions.json";
import eventOptions from "../data/eventOptions.json";

const getSearchData = (searchType) => {
  switch (searchType) {
    case "places":
      return locationOptions;
    case "events":
      return eventOptions;
    default:
      return "Search type not defined";
  }
};

const mapSearchOptions = (options) => {
  return options.map((option) => {
    return { ...option, checked: false };
  });
};

const getSearchOptions = (searchType) => {
  const options = getSearchData(searchType);
  return mapSearchOptions(options);
};

export default getSearchOptions;
