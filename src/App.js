import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherBox from "./component/WeatherBox";
import WeatherButton from "./component/WeatherButton";

// API DOCS: https://openweathermap.org/current
// 1. 앱이 실행되자마자 현재위치기반의 날씨가 보인다
// 2. 날씨 정보에는 도시, 섭씨 화씨 날씨 상태
// 3. 5개의 버튼이 있다. (1개는 현재위치, 4개는 다른 도시)
// 4. 도시 버튼을 클릭할 때마다 도시 별 날씨가 나온다
// 5. 현재 위치 버튼을 누르면 다시 현재위치 기반의 날씨가 나온다
// 6. 데이터를 들고 오는 동안 로딩 스피너가 돈다

function App() {
  const APIkey = "2f993bc610067493615249b425872332";

  const [weather, setWeather] = useState(null);

  useEffect(() => {
    getCurrentLocation();
  }, []);

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  // const getWeatherByCurrentLocation = async (lat, lon) => {
  //   let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric`;

  //   let response = await fetch(url);
  //   let data = await response.json();
  //   console.log("data", data);
  //   setWeather(data);
  // };
  const getWeatherByCurrentLocation = async (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&lang=kr&units=metric`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setWeather(data);
      // console.log("data", data);
    } catch (error) {
      console.error("날씨 데이터를 가져오는 데 실패:", error);
    }
  };

  return (
    <div>
      <div className="container">
        <WeatherBox weather={weather} />
        <WeatherButton />
      </div>
    </div>
  );
}

export default App;
