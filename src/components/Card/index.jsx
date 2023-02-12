import React from 'react';
import styles from './Card.module.scss';

const Card = ({ title, price, imageUR, color, isNew }) => {
  return (
    <div className={styles.card}>
      <img src={imageUR} alt="Card" />
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
