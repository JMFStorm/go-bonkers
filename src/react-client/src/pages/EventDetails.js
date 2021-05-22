import React, { useEffect, useState } from "react";
import { BiTimeFive, MdPlace, MdWeb } from "react-icons/all";
import { useSelector } from "react-redux";

import defaultImgNotFound from "../images/image-not-found.jpg";
import FavouriteButton from "../components/FavouriteButton";
import { calculateDistance } from "../functions/geolocation";
import Carousel from "../components/Carousel";
import NavbarUser from "../components/NavbarUser";

const AboutPageDetails = () => {
  const selectedPlace = useSelector((state) => state.places.selectedPlace);
  const userLocation = useSelector((state) => state.search.location);
  const isLoggedIn = useSelector((state) => state.user.isLogged);
  const [place, setPlace] = useState();

  useEffect(() => {
    Object.keys(selectedPlace).length ? setPlace(selectedPlace) : null;
    // console.log("selected place:", selectedPlace);
  }, [selectedPlace]);

  const createDescription = () => {
    return { __html: selectedPlace.description.body };
  };

  const formatDate = (dateString) => {
    const split = dateString.split("T");
    return `${split[0].substring(8, 10)}.${split[0].substring(5, 7)}.${split[0].substring(
      0,
      4
    )} - Klo ${split[1].substring(0, 5)}`;
  };

  return (
    <div className="about">
      <div className="page-container">
        <NavbarUser />
        {place && (
          <div className="about__place">
            <div className={"about__slider"}>
              {place.description.images !== null ? (
                <Carousel className={"image-test"} place={place.description.images} />
              ) : (
                <img src={defaultImgNotFound} alt="" />
              )}
            </div>
            <div className="about__container">
              <h1 className="about__title">{place.name.fi}</h1>

              {isLoggedIn && (
                <FavouriteButton locationName={selectedPlace.name.fi} currentLocationId={selectedPlace.id} />
              )}

              <p className="about__distance">
                {calculateDistance({
                  start: userLocation,
                  end: { lat: selectedPlace.location.lat, lng: selectedPlace.location.lon },
                })}{" "}
                km
              </p>

              <div className={"about__content"}>
                {selectedPlace.description.body && (
                  <div className="about__descr" dangerouslySetInnerHTML={createDescription()} />
                )}

                <div className={"about__wrapper"}>
                  <div className="about__info">
                    <div>
                      <MdPlace />
                      <p className="about__info_address">
                        {place.location.address.street_address} {place.location.address.postal_code}
                        <br /> {place.location.address.locality}
                      </p>
                    </div>

                    <div className="about__info_website">
                      <span>
                        <MdWeb />
                      </span>{" "}
                      <br />
                      <a href={place.info_url}> Verkkosivut</a>
                    </div>

                    {place.opening_hours && (
                      <div className="about__info_open">
                        <BiTimeFive />
                        <h2>Ma - Su</h2>
                        {place.opening_hours.hours.map((data) =>
                          data.opens === null ? (
                            <p key={data.weekday_id}>Suljettu</p>
                          ) : (
                            <p key={data.weekday_id}>
                              {data.opens.slice(0, -3)} : {data.closes.slice(0, -3)}
                            </p>
                          )
                        )}
                      </div>
                    )}
                    {place.event_dates && (
                      <div className="about__info_open">
                        {place.event_dates.starting_day && (
                          <div>
                            <h2>Alkaa:</h2>
                            <p>{formatDate(place.event_dates.starting_day)}</p>
                          </div>
                        )}

                        {place.event_dates.ending_day && (
                          <div>
                            <h2>Loppuu:</h2>
                            <p>{formatDate(place.event_dates.ending_day)}</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutPageDetails;
