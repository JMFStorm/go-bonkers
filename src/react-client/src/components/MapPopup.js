import React from "react";
import { InfoWindow } from "@react-google-maps/api";

const MapPopup = ({ place, select, setPlace }) => {
  return (
    <div>
      <InfoWindow
        onCloseClick={() => {
          setPlace(null);
        }}
        position={{ lat: place.location.lat, lng: place.location.lon }}
      >
        <div>
          <h2>{place.name.fi}</h2>
          <button onClick={select}>Katso tietoja</button>
        </div>
      </InfoWindow>
    </div>
  );
};

export default MapPopup;
