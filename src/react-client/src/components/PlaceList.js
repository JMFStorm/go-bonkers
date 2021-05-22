import React from "react";
import { useSelector } from "react-redux";

import "../styles/style.scss";
import PlaceListItem from "./PlaceListItem";
import NavbarUser from "./NavbarUser";
import { calculateDistance } from "../functions/geolocation";

const getSearchType = (type) => {
  switch (type) {
    case "places":
      return "Paikkoja";
    case "events":
      return "Tapahtumia";
  }
};

const PlaceList = () => {
  const places = useSelector((state) => state.places.places);
  const searchTags = useSelector((state) => state.search.tags);
  const searchType = useSelector((state) => state.search.searchType);

  const userLocation = useSelector((state) => state.search.location);

  return (
    <div className={"page-container"}>
      <section className="place-list">
        <NavbarUser />
        <h1 className="place-list__title">Hakutulokset</h1>
        <h2>{getSearchType(searchType)} Avainsanoilla:</h2>
        <ul>
          {searchTags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        {places && (
          <ul className="place-list__list">
            {places &&
              places
                // sort by distance
                .sort((a, b) => {
                  return (
                    calculateDistance({ start: userLocation, end: { lat: a.location.lat, lng: a.location.lon } }) -
                    calculateDistance({ start: userLocation, end: { lat: b.location.lat, lng: b.location.lon } })
                  );
                })
                .map((place) => {
                  return (
                    <li key={place.id}>
                      <PlaceListItem place={place} />
                    </li>
                  );
                })}
          </ul>
        )}
      </section>
    </div>
  );
};

export default PlaceList;
