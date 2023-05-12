import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, ButtonGroup } from "react-bootstrap";
import "../style/ex19.css";

const Ex19 = () => {
  // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid="d98ae2c3057b1f588501393dc077fc5f"
  const [city, setCity] = useState("gwangju");
  const [temp, setTemp] = useState("0");
  const [icon, setIcon] = useState("");
  const [cloud, setCloud] = useState("");

  const getCity = (e) => {
    console.log(e);
    setCity(e);
  };

  const getData = () => {
    let url = ` https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d98ae2c3057b1f588501393dc077fc5f`;
    // fetch ver

    axios.get(url).then((res) => {
      console.log("weather res :", res.data.clouds.all);
      // 켈빈 온도 - 273 = 섭씨 온도
      setTemp(parseInt(res.data.main.temp - 273));

      //   아이콘 세팅
      setIcon(
        `https://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`
      );

      //   구름의 양
      if (res.data.clouds.all > 90) {
        setCloud("매우 흐림", res.data);
      } else if (res.data.clouds.all > 60) {
        setCloud("흐림");
      } else if (res.data.clouds.all > 30) {
        setCloud("약간 흐림");
      } else {
        setCloud("맑음");
      }
    });
  };

  useEffect(() => {
    getData();
  }, [city]);
  return (
    <div className="weather-container">
      <div className="weather-item">
        <h1>날씨날씨</h1>

        <div className="weather-data">
          <img src={icon} width="100px"></img>
          <h1>{temp}°C</h1>
          <h3>{city}</h3>
          <h4>{cloud}</h4>
        </div>
        <div>
          <button
            onClick={() => {
              getCity("gwangju");
            }}
          >
            광주
          </button>
          <button
            onClick={() => {
              getCity("seoul");
            }}
          >
            서울
          </button>
          <button
            onClick={() => {
              getCity("busan");
            }}
          >
            부산
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ex19;
