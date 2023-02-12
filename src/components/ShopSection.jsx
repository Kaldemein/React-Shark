import React from 'react';
import Card from './Card';

function ShopSection({ items, headling, sort }) {
  const { sortType, sortValue } = sort;
  console.log(sortType);
  items.map((item) => console.log(item[sortType]));

  return (
    <div className="shop-section">
      <div className="container">
        <h4>WOMENS</h4>
        <div className="shop-section__headlings-container">
          <h3>{headling}</h3>
          <a href="">View All</a>
        </div>
        <div className="shop-section__items">
          {items
            .filter((item) => sortType.every((type, index) => item[type] === sortValue[index]))
            .slice(0, 4)
            .map((item) => (
              <Card {...item} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default ShopSection;
