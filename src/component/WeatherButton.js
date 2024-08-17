import React from "react";
import { Button } from "react-bootstrap";

const WeatherButton = () => {
  return (
    <div>
      <Button variant="warning">
        현재위치
        <br />
        Current Location
      </Button>
      <Button variant="warning">
        파리
        <br />
        Paris
      </Button>
      <Button variant="warning">
        뉴욕
        <br />
        New York
      </Button>
    </div>
  );
};

export default WeatherButton;
