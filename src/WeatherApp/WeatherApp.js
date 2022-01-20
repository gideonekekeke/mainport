import React, { useEffect, useState } from "react";

import { Input } from "antd";
import styled from "styled-components";
import pic from "../img/1.jpg";
import axios from "axios";

const api = {
  key: "1c05f4b5e6cd5ed6e8445e2894dc586d",
  base: "https://api.openweathermap.org/data/2.5/",
};

const WeatherApp = () => {
  const [searchBox, setSearchBox] = useState("");
  const [fetchWeather, setFetchWeather] = useState("");

  const SearchWeather = async () => {
    const res = await axios(
      `${api.base}weather?q=${searchBox}&units=metric&appid=${api.key}`
    );
    console.log(res);
    if (res) {
      return setFetchWeather(res.data);
    }
  };

  // const SearchWeather = (e) => {
  //   if (e.key === "Enter") {
  //     fetch(`${api.base}weather?q=${searchBox}&units=metric&appid=${api.key}`)
  //       .then((res) => res.json())
  //       .then((res) => setFetchWeather(res));
  //   }
  // };

  useEffect(() => {
    SearchWeather();
  }, []);

  const dateBuilder = (d) => {
    let months = [
      "January",
      "Febuary",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednessday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let month = months[d.getMonth()];
    let date = d.getDate();
    let year = d.getFullYear();

    return `${day} ${month} ${date} ${year}`;
  };

  return (
    <Container>
      <ContainerImage src={pic} />
      {fetchWeather ? (
        <>
          <Input
            onKeyPress={SearchWeather}
            onChange={(e) => {
              setSearchBox(e.target.value);
            }}
            value={searchBox}
            placeholder="Search"
          />
          <WeatherDegree>{dateBuilder(new Date())}</WeatherDegree>
          <WeatherCity>
            {fetchWeather.name}, {fetchWeather.sys.country}
          </WeatherCity>
          <WeatherCelcius>
            {" "}
            {Math.round(fetchWeather.main.temp)}°C
          </WeatherCelcius>
          <WeatherClod> {fetchWeather.weather[0].main}</WeatherClod>
        </>
      ) : (
        <>
          <Input
            onKeyPress={SearchWeather}
            onChange={(e) => {
              setSearchBox(e.target.value);
            }}
            value={searchBox}
            placeholder="Search"
          />
          <WeatherDegree>{dateBuilder(new Date())}</WeatherDegree>
          <WeatherCity>Default, Country</WeatherCity>
          <WeatherCelcius> 0°C</WeatherCelcius>
          <WeatherClod> description</WeatherClod>
        </>
      )}
    </Container>
  );
};

export default WeatherApp;

const ContainerImage = styled.img`
  height: 100vh;
  width: 100%;
  background-repeat: no-repeat;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */

  Input {
    position: absolute;
    height: 50px;
    width: 300px;
    margin-top: 5px;
    font-size: 15px;
  }
`;

const WeatherDegree = styled.div`
  position: absolute;
  margin-top: 100px;
  color: white;
`;
const WeatherCity = styled.div`
  position: absolute;
  margin-top: 150px;
  font-size: 38px;
  font-weight: bold;
  color: white;
`;

const WeatherCelcius = styled.div`
  position: absolute;
  margin-top: 200px;
  font-size: 100px;
  font-weight: bold;
  color: white;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.19);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  /* border-radius: 10px; */
  /* border: 1px solid rgba(255, 255, 255, 0.18); */
  box-shadow: 0px 5px 7px -2px rgba(0, 0, 0, 0.35);
  height: 170px;
  width: 300px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WeatherClod = styled.div`
  position: absolute;
  margin-top: 300px;
  font-size: 100px;
  font-weight: bold;
  color: white;
`;
