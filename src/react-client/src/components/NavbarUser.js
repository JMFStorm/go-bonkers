import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavbarUser = () => {
  const selectedLocation = useSelector((state) => state.places.selectedPlace);
  const searchedPlaces = useSelector((state) => state.places.places);

  const [navState, setNavState] = useState(0);

  useEffect(() => {
    if (Object.keys(selectedLocation).length) {
      setNavState(2);
    } else if (searchedPlaces.length !== 0) {
      setNavState(1);
    } else {
      setNavState(0);
    }
  }, [selectedLocation, searchedPlaces]);

  if (navState === 1) {
    return (
      <div className={"page-container"}>
        <nav className={"nav-link"}>
          <Link to="/search">Etsi paikkoja </Link>
          <span> &gt; </span>
          <Link to="/locations">Katso paikkoja </Link>
        </nav>
      </div>
    );
  } else if (navState === 2) {
    return (
      <div className={"page-container"}>
        <nav className={"nav-link"}>
          <Link to="/search">Etsi paikkoja </Link>
          <span> &gt; </span>
          <Link to="/locations">Katso paikkoja </Link>
          <span> &gt; </span>
          <Link to="/details">Katso tietoja </Link>
        </nav>
      </div>
    );
  }

  return (
    <div className={"page-container"}>
      <nav className={"nav-link"}>
        <Link to="/search">Etsi paikkoja</Link>
        <span> &gt; </span>
      </nav>
    </div>
  );
};

export default NavbarUser;
