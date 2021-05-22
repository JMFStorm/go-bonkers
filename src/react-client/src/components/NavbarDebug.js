import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { loginUser, logoutUser } from "../redux/userActions";

const NavbarDebug = () => {
  const dispatch = useDispatch();

  const loginTest = () => {
    dispatch(loginUser({ username: "Janne12", password: "sekret123" }));
  };

  const logoutTest = () => {
    dispatch(logoutUser());
  };

  return (
    <div>
      Debug Menu:
      <Link to="/search">Etsi paikkoja </Link>
      <Link to="/locations">Katso paikkoja </Link>
      <Link to="/details">Katso tietoja </Link>
      <Link to="/user-profile">Profiili </Link>
      <div>
        <button onClick={loginTest}>Login test</button>
        <button onClick={logoutTest}>Logout test</button>
      </div>
    </div>
  );
};

export default NavbarDebug;
