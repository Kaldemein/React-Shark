import React from 'react';

const Banner = ({ backgroundImagesURL }) => {
  return (
    <div
      style={{
        backgroundImage: `url("${backgroundImagesURL}")`,
      }}
      className="banner">
      <div className="container">
        <h2>
          TRAINING ESSENTIALS: <br /> ADAPT & ARRIVAL
        </h2>
        <p>
          Feel good, perform better in Adapt’s bold colours & patterns. <br />
          Redefine your potential in Arrival’s lightweight, breathable designs.
        </p>
        <div>
          <button>SHOP ADAPT</button>
          <button>SHOP ARRIVAL</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
