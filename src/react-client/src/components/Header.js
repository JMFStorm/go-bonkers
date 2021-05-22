import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import UserModal from "./UserModal";
import logo from "../images/logo.png";
import WeatherWindow from "./WeatherWindow";
import UserActions from "./UserActions";

const Header = () => {
  const userIsLogged = useSelector((state) => state.user.isLogged);

  return (
    <div className="header">
      <WeatherWindow />
      <Link className="header__logo" to="/search">
        <img src={logo} alt="Go Bonkers" />
      </Link>
      <div className="button-position">
        {!userIsLogged && <UserModal />}
        {userIsLogged && <UserActions />}
      </div>
    </div>
  );
};

export default Header;
