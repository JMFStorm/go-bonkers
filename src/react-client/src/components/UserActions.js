import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { logoutUser } from "../redux/userActions";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import FavoriteIcon from '@material-ui/icons/Favorite';

const UserActions = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.currentUser.username);

  const logoutHandle = () => {
    dispatch(logoutUser());
  };

  return (
    <div className="useractions">
      <div className="username">{username}</div>
      <div className="profilebuttons">
      <Link className="favorites" to="/user-profile"><FavoriteIcon style={{fontSize: "3rem"}}/> </Link>
        <button className="exitIcon" onClick={logoutHandle}><ExitToAppIcon style={{fontSize: "3rem"}}/></button>
      </div>
    </div>
  );
};

export default UserActions;
