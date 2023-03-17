import React from 'react';
import AccessoriesCard from '../components/AccessoriesCard/index';
import SelectedFilterCard from '../components/SelectedFilterCard/';
import FilterModal from '../components/FilterModal/';
const Accessories = ({ items, filterBy, setFilterBy, setActiveFilter, activeFilter }) => {
  const filter = ['Gender', 'Size', 'Color', 'Pattern', 'Discount', 'Price', 'Sort By'];
  const types = ['All', 'Bags', 'Socks', 'Headwear', 'Equipment', 'Bottles'];
  const [activeType, setActiveType] = React.useState(0);
  const onClickType = (index, item) => {
    setFilterBy(item.toLocaleLowerCase());
    setActiveType(index);
  };

  const onClickFilter = () => {};

  React.useEffect(() => {
    return () => {
      setFilterBy('all');
    };
  }, []);

  return (
    <div className="Accessories">
      <div className="Accessories__header-block">
        <h2>All Accessories</h2>
      </div>
      {/* <div className="Accessories__filters">
        <ul>
          {filter.map((item, index) => (
            <li>{item}</li>
          ))}
        </ul>
        <div className="Accessories__SelectedFilters">
          <p>Selected filters:</p>
          <SelectedFilterCard />
          <SelectedFilterCard />
        </div>
      </div> */}

      <div className="Accessories__types">
        <ul>
          {types.map((item, index) => (
            <li
              onClick={() => onClickType(index, item)}
              className={activeType === index ? 'active' : ''}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="Accessories__items">
        {items
          .filter((item) => item.type === 'accessories')
          .map((accessory) => (
            <AccessoriesCard {...accessory} />
          ))}
      </div>
    </div>
  );
};

export default Accessories;
