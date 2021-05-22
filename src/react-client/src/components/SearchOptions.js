import React from "react";

import PlaceOption from "./PlaceOption";

const SearchOptions = ({ placeOptions }) => {
  return (
    <div className="place-options">
      {placeOptions.map((option) => (
        <PlaceOption key={option.value} option={option} />
      ))}
    </div>
  );
};

export default SearchOptions;
