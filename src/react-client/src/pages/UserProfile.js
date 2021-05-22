import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { getLocationById } from "../services/api";
import { selectPlace } from "../redux/placesActions";

const UserProfile = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const userFavourites = useSelector((state) => state.user.userFavourites);
  const currentUser = useSelector((state) => state.user.currentUser);

  // Select location
  const showDetails = async (favourite) => {
    const location = await getLocationById(favourite.placeId, favourite.type);
    dispatch(selectPlace(location.data));
    // eslint-disable-next-line fp/no-mutating-methods
    history.push("/details");
  };

  return (
    <div className="profile">
      <div className={"container page-container"}>
        <div className={"profile__content"}>
          {/*<div className={'profile__user'}>*/}
          {/*  <h2 className={'profile__user-header'}>Profile</h2>*/}
          {/*  <div className="profile__user-details">*/}
          {/*    <div>{currentUser.username}</div>*/}
          {/*  </div>*/}
          {/*</div>*/}

          {userFavourites && (
            <div className={"profile__list"}>
              <h2 className={"profile__list-header"}>My favourite places</h2>
              {userFavourites && userFavourites.length === 0 ? (
                <div className={"profile__empty-list"}>Your favourite list is empty</div>
              ) : (
                userFavourites.map((f) => {
                  return (
                    <>
                      <div className={"profile__column"} key={f.id}>
                        <p>{f.name}</p>
                        <button className="katso-tata" onClick={() => showDetails(f)}>Katso tätä</button>
                      </div>
                    </>
                  );
                })
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
