import React, { useEffect, useState } from "react";

import { getCityWeather } from "../services/api";

const WeatherWindow = () => {
  const [weatherData, setWeatherData] = useState();
  const [icon, setIcon] = useState();

  useEffect(async () => {
    const { data } = await getCityWeather("Helsinki");
    setWeatherData(data);
    // console.log("Weather data", data);
  }, []);

  return (
    <>
      <div className={"weather"}>
        {weatherData && (
          <div className="weather__content">
            <div className={"weather__content-city"}>{weatherData.name}</div>
          </div>
        )}
        {/*<div className={"weather__icon"}>*/}
        {/*  {weatherData && (*/}
        {/*    <div>*/}
        {/*      {weatherData.weather.map((item) => {*/}
        {/*        return <img key={item.id} src={`http://openweathermap.org/img/w/${item.icon}.png`} alt="" />;*/}
        {/*      })}*/}
        {/*    </div>*/}
        {/*  )}*/}
        {/*</div>*/}
        <div className={"weather__temp"}>
          {weatherData && (
            <div>
              {weatherData.main.temp > 0 ? (
                <div className={"weather__temp-temp"}>{weatherData.main.temp.toFixed()}&deg;</div>
              ) : (
                <div className={"weather__temp-temp"}>-{weatherData.main.temp.toFixed()}&deg;</div>
              )}
              {weatherData.weather.map((item) => {
                return (
                  <p key={item.id} className={"weather__temp-descr"}>
                    {item.description}
                  </p>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default WeatherWindow;
