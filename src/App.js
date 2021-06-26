import "./index.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

const apiKey = `cc5f8464753bb4f57ea0d867acfe536e`;
const urlBase = "api.openweathermap.org/data/2.5/"; //weather?q=London&appid={API key}

function App() {
  const [city, setCity] = useState("");
  const [weatherdata, setweatherData] = useState({});

  const getDate = new Date();
  const currentDate = getDate.toDateString();

  const fetchData = async (e) => {
    try {
      if (e.key === "Enter") {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cc5f8464753bb4f57ea0d867acfe536e&units=metric`
        );
        console.log(res.data);
        setweatherData(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // useEffect(() => {
  //   fetchData();
  // }, []);
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyPress={fetchData}
          />
        </div>
        {typeof weatherdata.main != "undefined" ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weatherdata.name},{weatherdata.sys.country}
              </div>
              <div className="date">{currentDate}</div>
            </div>
            <div className="weather-box">
              <div className="temp">{Math.round(weatherdata.main.temp)}°c</div>
              <div className="weather"></div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default App;
