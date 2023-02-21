import React from 'react';
import styles from './Card.module.scss';

const Card = ({ title, price, imageUR, color, isNew }) => {
  const [openSizes, setOpenSizes] = React.useState(false);
  return (
    <div
      on
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
          <li>
            <button>XS</button>
          </li>
          <li>
            <button>S</button>
          </li>
          <li>
            <button>M</button>
          </li>
          <li>
            <button>L</button>
          </li>
          <li>
            <button>XL</button>
          </li>
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
