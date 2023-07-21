import React from 'react';

type BannerProps = {
  BannerBackground: string;
  headling: string;
}
const Banner: React.FC<BannerProps> = ({ BannerBackground, headling }) => {
  return (
    <div
      style={{
        backgroundImage: `url("${BannerBackground}")`,
      }}
      className="banner">
      <div className="container">
        <h2>{headling}</h2>
        <p>
          Feel good, perform better in Adapt’s bold colours & patterns. <br />
          Redefine your potential in Arrival’s lightweight, breathable designs.
        </p>
        <div className="buttons">
          <button>SHOP ADAPT</button>
          <button>SHOP ARRIVAL</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
