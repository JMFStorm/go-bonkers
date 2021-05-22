import React, { useState } from "react";

import MapView from "../components/MapView";
import PlaceList from "../components/PlaceList";

const ViewLocations = () => {
  const [isMapView, setIsMapView] = useState(false);

  const switchMapView = (bool) => {
    setIsMapView(bool);
  };

  return (
    <div className="page-container">
      <div className="button-group">
        <button className="placelist-button" onClick={() => switchMapView(false)}>Paikat</button>
        <button className="placelist-button" onClick={() => switchMapView(true)}>Kartta</button>
      </div>
      {!isMapView && <PlaceList />}
      {isMapView && (
        <div className="map-div">
          <MapView />
        </div>
      )}
    </div>
  );
};

export default ViewLocations;
