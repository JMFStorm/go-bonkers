import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import "../styles/style.scss";
import defaultImgNotFound from "../images/image-not-found.jpg";
import { selectPlace } from "../redux/placesActions";
import { calculateDistance } from "../functions/geolocation";

const PlaceListItem = ({ place }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const userLocation = useSelector((state) => state.search.location);
  const [images, _] = useState([...(place.description.images || [])]);

  const placeCoordinates = { lat: place.location.lat, lng: place.location.lon };

  // Select location
  const setSelectedPlace = (selectedPlace) => {
    dispatch(selectPlace(selectedPlace));
    // eslint-disable-next-line fp/no-mutating-methods
    history.push("/details");
  };

  return (
    <div onClick={() => setSelectedPlace(place)} className="item">
      {images && images.length > 0 ? (
        <img className="item__image" src={images[0].url} alt="" />
      ) : (
        <img className="item__image" src={defaultImgNotFound} alt="" />
      )}
      <h3 className="item__name">{place.name.fi}</h3>
      <p className="item__distance">{calculateDistance({ start: userLocation, end: placeCoordinates })} km</p>
    </div>
  );
};

export default PlaceListItem;
