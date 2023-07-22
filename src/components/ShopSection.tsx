import React from 'react';
import Card from './Card';
import { useSelector } from 'react-redux';
import Skeleton from './Card/Skeleton.jsx';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../redux/store';


type Item = {
  category: string;
  color: string;
  id: string;
  imageUR: string;
  isNew: string;
  price: number;
  sizes: [];
  title: string;
  type: string;
}
type ShopSectionProps = {
  items: []
  headling: string;
  sort: {
    sortType:string[];
    sortValue: string[];
  };
  onClickAdd: ({}) => void;
}
const ShopSection:React.FC<ShopSectionProps>= ({ items, headling, sort, onClickAdd }) => {
  const { sortType, sortValue } = sort;
  const isLoaded = useAppSelector((state) => state.loadingSlice.isLoaded);
  return (
    <div className="shop-section">
      <div className="container">
        <h4>{sortValue.find((sex) => sex === 'men' || sex === 'woman')}</h4>
        <div className="shop-section__headlings-container">
          <h3>{headling}</h3>
          <a href="">View All</a>
        </div>
        <div className="shop-section__items">
          {isLoaded
            ? items
                .filter((item: any) =>
                  sortType.every((type, index) =>
                    item[type].toLowerCase().includes(sortValue[index].toLowerCase()),
                  ),
                )
                .slice(0, 4)
                .map((item: any) => (
                  <Link to={`/item/${item.id}`}>
                    <Card onClickAdd={onClickAdd} {...item} />
                  </Link>
                ))
            : [...new Array(4)].map((_, i) => <Skeleton key={i} />)}
        </div>
      </div>
    </div>
  );
}

export default ShopSection;
