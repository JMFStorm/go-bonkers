import React from "react";
import { Marker } from "@react-google-maps/api";

import locationIcon from "../images/paikkamarkkeri25px_nobg.png";

const MapLocations = ({ places, select }) => {
  return (
    <div>
      {places &&
        places.map((place) => {
          return (
            <Marker
              icon={locationIcon}
              onClick={() => select(place)}
              key={place.id}
              position={{
                lat: place.location.lat,
                lng: place.location.lon,
              }}
            />
          );
        })}
    </div>
  );
};

export default MapLocations;
