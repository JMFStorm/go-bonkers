import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "semantic-ui-css/semantic.min.css";

import RouterDom from "./RouterDom";
import getCurrentLocation from "../hooks/getCurrentLocation";
import { updateLocation } from "../redux/searchActions";
import { logoutUser } from "../redux/userActions";
import { removeCurrentUser } from "../services/storage";

import "../styles/style.scss";

const geolocationOptions = {
  timeout: 1000 * 60 * 1, // (1 min)
};

const App = () => {
  const dispatch = useDispatch();

  // Get geolocation hook
  const { location, error } = getCurrentLocation(geolocationOptions);

  // When got new location OR error
  useEffect(() => {
    Object.keys(location).length ? dispatch(updateLocation(location)) : null;
  }, [location, error]);

  // No user when App starts
  useEffect(() => {
    removeCurrentUser();
    dispatch(logoutUser());
  }, []);

  return (
    <div>
      <RouterDom />
    </div>
  );
};

export default App;
