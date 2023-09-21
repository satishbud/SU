import React from "react";
import "../styles/Home.css";

const HeroContainer = () => {
  return (
    <>
      <div className="hero-container">
        <div className="hero-cover">
          <img
            width="950px "
            height="360px"
            src="https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          ></img>
          <div className="hero-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroContainer;
