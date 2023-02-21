import React from 'react';
import styles from './ItemCart.module.scss';

const ItemCard = ({ title, price, imageUR, color, isNew }) => {
  return (
    <div className={styles.item}>
      <img width={90} height={125} src={imageUR} alt="CartItem" />
      <div className={styles.itemInfo}>
        <h5>{title}</h5>
        <p>Size: L</p>
        <p>${price} USD</p>
        <div className={styles.itemCounter}>
          <button>-</button>
          <p> 2 </p>
          <button>+</button>
        </div>
        <button>Remove</button>
      </div>
    </div>
  );
};

export default ItemCard;
