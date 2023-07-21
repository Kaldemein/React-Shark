import React from 'react';
type BottomBlockProps = {
  background: {
    leftBackground: string;
    rightBackground: string;
  };
}
const BottomBlock:React.FC<BottomBlockProps> = ({ background }) => {
  return (
    <div className="bottom-block">
      <div
        style={{
          backgroundImage: `url("${background.leftBackground}")`,
        }}
        className="bottom-block__left">
        <div>
          <h4>
            For <br /> woman
          </h4>
          <button>Shop</button>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url("${background.rightBackground}")`,
        }}
        className="bottom-block__right">
        <div>
          <h4>
            For <br /> men
          </h4>
          <button>Shop</button>
        </div>
      </div>
    </div>
  );
};

export default BottomBlock;
