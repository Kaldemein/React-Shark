import React from 'react';
import style from './AccessoriesCard.module.scss';
const AccessoriesCard = ({ isNew, title, color, price, imageUR }) => {
  return (
    <div className={style.AccessoriesCard}>
      <img src={imageUR} alt="" />
      <div className={style.AccessoriesCard__info}>
        <div className={style.AccessoriesCard__right}>
          {isNew ? <p className={style.AccessoriesCard__isNew}>new</p> : ''}
          <p className={style.AccessoriesCard__title}>{title}</p>
          <p className={style.AccessoriesCard__color}>{color}</p>
        </div>
        <div className={style.AccessoriesCard__left}>
          <p className={style.AccessoriesCard__price}>$ {price}</p>
        </div>
      </div>
    </div>
  );
};

export default AccessoriesCard;
