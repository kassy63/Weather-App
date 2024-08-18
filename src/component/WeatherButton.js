import React from "react";
import { Button } from "react-bootstrap";

const WeatherButton = ({
  cities,
  setCity,
  getCurrentLocation,
  selectedCity,
}) => {
  return (
    <div className="button-box">
      <Button
        variant={selectedCity === "" ? "primary" : "warning"} // 현재 위치 버튼에 대한 효과
        onClick={getCurrentLocation}
      >
        현재위치
        <br />
        Current Location
      </Button>
      {cities?.map((item, index) => (
        <Button
          variant={selectedCity === item.city ? "primary" : "warning"} // 선택된 도시에 대한 효과
          key={index}
          onClick={() => setCity(item.city)}
        >
          {item.city}
          <br />
          {item.translation}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
