import React from 'react';
import AccessoriesCard from '../components/AccessoriesCard/index';
import SelectedFilterCard from '../components/SelectedFilterCard/';
import FilterModal from '../components/FilterModal/';
import Skeleton from '../components/AccessoriesCard/Skeleton';
import { useSelector } from 'react-redux';
//top
//joggers
//shirt
//shorts
//leggins
//pullover
//передать в card openDrawer
const Accessories = ({
  cart,
  filterBy,
  setFilterBy,
  setActiveFilter,
  activeFilter,
  onClickAdd,
}) => {
  const filter = ['Gender', 'Size', 'Color', 'Pattern', 'Discount', 'Price', 'Sort By'];
  const types = ['All', 'top', 'joggers', 'shirt', 'shorts', 'leggins', 'pullover'];
  const [activeType, setActiveType] = React.useState(0);

  const onClickType = (index, item) => {
    setFilterBy(item.toLocaleLowerCase());
    setActiveType(index);
  };

  const isLoaded = useSelector((state) => state.loadingSlice.isLoaded);

  React.useEffect(() => {
    return () => {
      setFilterBy('all');
    };
  }, []);

  return (
    <div className="Accessories">
      <div className="Accessories__header-block">
        <h2>Your bag</h2>
      </div>

      <div className="Accessories__items">
        {isLoaded
          ? cart.map((accessory) => <AccessoriesCard onClickAdd={onClickAdd} {...accessory} />)
          : [...new Array(10)].map((_, i) => <Skeleton key={i} />)}
      </div>
    </div>
  );
};

export default Accessories;
