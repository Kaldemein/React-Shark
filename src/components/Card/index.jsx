import React from 'react';
import styles from './Card.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setOpenDrawer } from '../../redux/slices/cartSlice';

const Card = ({ title, price, type, category, imageUR, color, isNew, sizes, id, onClickAdd }) => {
  const openDrawer = useSelector((state) => state.cartSlice.openDrawer);
  const dispatch = useDispatch();
  const [openSizes, setOpenSizes] = React.useState(false);

  const onClickSizes = (size, event) => {
    console.log(event);
    console.log(event.target);
    console.log(event.currentTarget);
    event.stopPropagation();
    event.preventDefault();
    onClickAdd({ id, title, type, price, category, imageUR, color, isNew, size });
    dispatch(setOpenDrawer());
  };

  return (
    <div
      onMouseEnter={() => setOpenSizes(true)}
      onMouseLeave={() => setOpenSizes(false)}
      className={styles.card}>
      <img src={imageUR} alt="Card" />
      <div
        style={
          openSizes
            ? { visibility: 'visible', opacity: '1' }
            : { visibility: 'hidden', opacity: '0' }
        }
        className={styles.sizes}>
        <ul>
          {sizes.map((size) => (
            <li>
              <button onClick={(event) => onClickSizes(size, event)}>{size}</button>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.cardInfo}>
        <div className={styles.leftInfo}>
          {isNew && <p className={styles.isNew}>New</p>}
          <p className={styles.title}>{title}</p>
          <p className={styles.color}>{color}</p>
        </div>
        <div className={styles.price}>{price} $</div>
      </div>
    </div>
  );
};

export default Card;
