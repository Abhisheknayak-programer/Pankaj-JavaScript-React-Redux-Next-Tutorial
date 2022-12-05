import React from "react";
import "./Carousel.css";
import mountainImg from "../../assets/mountain.jpeg";
import flowerImg from "../../assets/flower.jpeg";

const Carousel = () => {
  return (
    <div>
      <img src={mountainImg} alt="moutain" />
      <img src={flowerImg} alt="flower" />
    </div>
  );
};

export default Carousel;
