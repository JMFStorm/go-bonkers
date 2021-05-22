import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GoogleMap, InfoWindow, LoadScript, Marker } from "@react-google-maps/api";
import { useHistory } from "react-router-dom";

import MapPopup from "./MapPopup";
import MapLocations from "./MapLocations";
import userIcon from "../images/sijaintimarkkeri25px_nobg.png";
import { selectPlace } from "../redux/placesActions";
import { mapApiKey } from "../utils/config";

// Map style
const containerStyle = {
  width: "100%",
  height: "400px",
};

// Default start location for map
const defaultLocation = {
  lat: 60.1699,
  lng: 24.9384,
};

const Map = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userLocation = useSelector((state) => state.search.location);
  const places = useSelector((state) => state.places.places);
  const [selectedPlace, setSelectedPlace] = useState(null);

  const moveToDetails = () => {
    dispatch(selectPlace(selectedPlace));
    // eslint-disable-next-line fp/no-mutating-methods
    history.push("/details");
  };

  return (
    <LoadScript googleMapsApiKey={mapApiKey}>
      <GoogleMap mapContainerStyle={containerStyle} center={userLocation || defaultLocation} zoom={12}>
        {/* User location marker */}
        {userLocation && <Marker icon={userIcon} position={userLocation} />}

        {/* Locations */}
        <MapLocations places={places} select={setSelectedPlace} />

        {/* Popup window */}
        {selectedPlace && <MapPopup place={selectedPlace} setPlace={setSelectedPlace} select={moveToDetails} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default React.memo(Map);
