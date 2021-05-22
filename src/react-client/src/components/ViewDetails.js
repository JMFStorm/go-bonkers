import React from "react";
import { useSelector } from "react-redux";

import PlaceDetails from "../pages/PlaceDetails";
import EventDetails from "../pages/EventDetails";

const ViewDetails = () => {
  const searchLocationType = useSelector((state) => state.search.searchType);

  return (
    <div>
      {searchLocationType === "places" && <PlaceDetails />}
      {searchLocationType === "events" && <EventDetails />}
    </div>
  );
};

export default ViewDetails;
