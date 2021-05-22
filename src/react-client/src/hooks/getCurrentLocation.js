import React, { useEffect, useState } from "react";

const getCurrentLocation = (options = {}) => {
  const [error, setError] = useState();

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported.");
      return;
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
  }, [options]);

  const [location, setLocation] = useState({});

  const onSuccess = (position) => {
    const { latitude, longitude } = position.coords;

    setLocation({
      lat: latitude,
      lng: longitude,
    });
  };

  const onError = (error) => setError(error.message);

  return { location, error };
};

export default getCurrentLocation;
