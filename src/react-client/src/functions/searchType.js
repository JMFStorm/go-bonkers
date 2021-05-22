const typeSingular = (pluralType) => {
  switch (pluralType) {
    case "places":
      return "place";
    case "events":
      return "event";
    case "activities":
      return "activity";
    default:
      return pluralType;
  }
};

export default typeSingular;
