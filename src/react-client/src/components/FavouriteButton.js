import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { sendAddFavourite, sendRemoveFavourite } from "../redux/userActions";
import { getLocationDbId, userLikesLocation } from "../services/user";

const FavouriteButton = ({ locationName, currentLocationId }) => {
  const dispatch = useDispatch();

  const userLikedLocations = useSelector((state) => state.user.userFavourites);
  const searchLocationType = useSelector((state) => state.search.searchType);
  const [userLikes, setUserLikes] = useState();
  const [classNames, setClassNames] = useState("heart");

  // Determine if is liked
  useEffect(() => {
    setUserLikes(userLikesLocation(userLikedLocations, currentLocationId));
  }, [userLikedLocations]);

  // Chech status change
  useEffect(() => {
    userLikes ? setClassNames("heart is-active") : setClassNames("heart");
  }, [userLikes]);

  // Toggle event
  const toggleLike = (likeStatus) => {
    likeStatus
      ? dispatch(
          sendAddFavourite({
            placeId: currentLocationId,
            name: locationName,
            type: searchLocationType,
          })
        )
      : dispatch(sendRemoveFavourite(getLocationDbId(currentLocationId, userLikedLocations)));
    setUserLikes(!userLikes);
  };

  return (
    <div className={'heart-wrapper'}>
      <button onClick={() => toggleLike(!userLikes)} className={classNames} />
    </div>
  );
};

export default FavouriteButton;
