import React from 'react';
import styles from './ItemCart.module.scss';

const ItemCard = ({ id, title, price, imageUR, color, isNew, onClickRemove, size, items }) => {
  return (
    <div className={styles.item}>
      <img width={105} height={125} src={imageUR} alt="CartItem" />
      <div className={styles.itemInfo}>
        <h5>{title}</h5>
        <p>
          Size: <span>{size}</span>
        </p>
        <p>${price} USD</p>
        <div className={styles.itemCounter}>
          <button>-</button>
          {/* <p> {items.filter((item) => item.id === id).length}</p> */}
          <button>+</button>
        </div>
        <button onClick={() => onClickRemove(id)}>Remove</button>
      </div>
    </div>
  );
};

export default ItemCard;
